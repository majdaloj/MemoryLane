import React from "react";
import StartCreateFlow from "./StartCreateFlow";
import SelectFriend from "./SelectFriend";
import SelectMediaType from "./SelectMediaType";
import UploadMedia from "./UploadMedia";
import WriteMessage from "./WriteMessage";
import SetDate from "./SetDate";
import { ImageBackground } from "react-native";

const CreateMessage = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const [selectedFriend, setSelectedFriend] = React.useState(null);
  const [selectedMediaType, setSelectedMediaType] = React.useState(null);
  const [mediaUpload, setMediaUpload] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [date, setDate] = React.useState(null);

  const onNext = () => setCurrentStep((prev) => prev + 1);

  const onSubmit = () => {};

  const steps = {
    0: <StartCreateFlow onContinue={onNext} />,
    1: (
      <SelectFriend
        onNext={onNext}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
    ),
    2: (
      <SelectMediaType
        onNext={onNext}
        selectedMediaType={selectedMediaType}
        setSelectedMediaType={setSelectedMediaType}
      />
    ),
    3: (
      <UploadMedia
        onNext={onNext}
        selectedMediaType={selectedMediaType}
        setMediaUpload={setMediaUpload}
      />
    ),
    4: (
      <WriteMessage onNext={onNext} message={message} setMessage={setMessage} />
    ),
    5: <SetDate onNext={onSubmit} setDate={setDate} />,
  };

  return (
    <ImageBackground
      source={require("../../assets/background1.png")}
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {steps[currentStep]}
    </ImageBackground>
  );
};

export default CreateMessage;
