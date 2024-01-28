import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";
import { TEXT_STYLE } from "./style";

const IconStatement = ({ iconDefinition, text }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
      }}
    >
      <FontAwesomeIcon
        style={{ opacity: 0.75, marginTop: -10 }}
        color="#5a3363"
        icon={iconDefinition}
        size={50}
      />
      <Text style={{ ...TEXT_STYLE }}>{text}</Text>
    </View>
  );
};

export default IconStatement;
