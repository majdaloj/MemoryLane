import { View, Text, TouchableOpacity } from "react-native";
import {
  BUTTON_STYLE,
  TEXT_STYLE,
  CONTAINER_STYLE,
  BUTTON_TEXT_STYLE,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const UploadMedia = ({ onNext, selectedMediaType, setMediaUpload }) => {
  // const data = new FormData();
  // data.append("file", {
  //   name: file.name,
  //   type: file.type,
  //   uri: Platform.OS === "ios" ? file.uri.replace("file://", "") : file.uri,
  // });

  return (
    <View style={CONTAINER_STYLE}>
      <Text style={{ ...TEXT_STYLE, alignSelf: "center" }}>Upload File</Text>
      <TouchableOpacity
        onPress={onNext}
        style={{
          ...BUTTON_STYLE,
          backgroundColor: "lightgrey",
          alignItems: "center",
          flexDirection: "row",
          gap: 15,
        }}
      >
        <FontAwesomeIcon icon={faUpload} size={35} />
        <Text style={{ ...BUTTON_TEXT_STYLE, color: "black", marginTop: 10 }}>
          Choose File
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext} style={BUTTON_STYLE}>
        <Text style={BUTTON_TEXT_STYLE}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadMedia;
