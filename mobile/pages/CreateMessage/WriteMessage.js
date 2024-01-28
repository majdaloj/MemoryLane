import { View, Text, TouchableOpacity, TextInput } from "react-native";
import {
  BUTTON_STYLE,
  TEXT_STYLE,
  CONTAINER_STYLE,
  BUTTON_TEXT_STYLE,
} from "./style";

const WriteMessage = ({ onNext, message, setMessage }) => {
  return (
    <View style={CONTAINER_STYLE}>
      <Text style={{ ...TEXT_STYLE, alignSelf: "center" }}>
        Take a moment to reminisce about the time you shared with together. What
        do you want to say?
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          height: 400,
          borderColor: "lightgray",
          borderWidth: 1,
          borderRadius: 15,
          padding: 30,
          paddingTop: 30,
          paddingBottom: 30,
          fontSize: 20,
        }}
        value={message}
        blurOnSubmit={true}
        onChangeText={(e) => {
          setMessage(e);
        }}
        multiline
      />
      <TouchableOpacity
        disabled={!message}
        onPress={onNext}
        style={{ ...BUTTON_STYLE, opacity: !!message ? 1 : 0.5 }}
      >
        <Text style={BUTTON_TEXT_STYLE}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteMessage;
