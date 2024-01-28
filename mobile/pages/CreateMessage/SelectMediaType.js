import { View, Text, TouchableOpacity, Pressable } from "react-native";
import {
  BUTTON_STYLE,
  TEXT_STYLE,
  CONTAINER_STYLE,
  BUTTON_TEXT_STYLE,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFilm,
  faPencil,
  faCameraRetro,
  faMicrophoneAlt as faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const MEDIA_TYPE_STYLES = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 20,
  borderColor: "lightgray",
  borderWidth: 1,
  borderRadius: 15,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 30,
  paddingRight: 30,
  backgroundColor: "white",
};

const SelectMediaType = ({
  onNext,
  selectedMediaType,
  setSelectedMediaType,
}) => {
  const isPhoto = selectedMediaType === "photo";
  const isVideo = selectedMediaType === "video";
  const isText = selectedMediaType === "text";
  const isAudio = selectedMediaType === "audio";

  return (
    <View style={CONTAINER_STYLE}>
      <Text style={{ ...TEXT_STYLE, fontWeight: 600, alignSelf: "center" }}>
        What would you like to send?
      </Text>
      <Pressable
        onPress={() => setSelectedMediaType("photo")}
        style={{
          ...MEDIA_TYPE_STYLES,
          backgroundColor: isPhoto ? "lightgray" : "white",
        }}
      >
        <FontAwesomeIcon icon={faCameraRetro} size={40} />
        <Text style={{ ...TEXT_STYLE, marginTop: 10 }}>A Photo</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedMediaType("video")}
        style={{
          ...MEDIA_TYPE_STYLES,
          backgroundColor: isVideo ? "lightgray" : "white",
        }}
      >
        <FontAwesomeIcon icon={faFilm} size={40} />
        <Text style={{ ...TEXT_STYLE, marginTop: 10 }}>A Video</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedMediaType("text")}
        style={{
          ...MEDIA_TYPE_STYLES,
          backgroundColor: isText ? "lightgray" : "white",
        }}
      >
        <FontAwesomeIcon icon={faPencil} size={40} />
        <Text style={{ ...TEXT_STYLE, marginTop: 10 }}>A Note</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelectedMediaType("audio")}
        style={{
          ...MEDIA_TYPE_STYLES,
          backgroundColor: isAudio ? "lightgray" : "white",
        }}
      >
        <FontAwesomeIcon icon={faMicrophone} size={40} />
        <Text style={{ ...TEXT_STYLE, marginTop: 10 }}>A Recording</Text>
      </Pressable>
      <TouchableOpacity
        onPress={onNext}
        style={{ ...BUTTON_STYLE, opacity: !!selectedMediaType ? 1 : 0.5 }}
        disabled={!selectedMediaType}
      >
        <Text style={BUTTON_TEXT_STYLE}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectMediaType;
