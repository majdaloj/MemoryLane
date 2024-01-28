const router = require("express").Router();
const Memory = require("../models/Memory");
const User = require("../models/User");

router.get("/send-memory", async (req, res) => {
  try {
    const invisibleMemories = await Memory.findAll({
      where: {
        state: "invisible",
      },
    });

    for (const memory of invisibleMemories) {
      if (memory.send_time <= Date.now()) {
        memory.state = "visible";
        memory.save();
        console.log(
          `Memory from ${memory.from_user_id} to ${memory.for_user_id} has been sent !`
        );
      }
    }

    res.status(200).send("Memories sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
