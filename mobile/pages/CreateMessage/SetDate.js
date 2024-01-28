import { View, Text, TouchableOpacity } from "react-native";
import {
  BUTTON_STYLE,
  TEXT_STYLE,
  CONTAINER_STYLE,
  BUTTON_TEXT_STYLE,
} from "./style";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const SetDate = ({ onSubmit, date, setDate }) => {
  const convertedDate = (d) =>
    moment(moment(d).format("YYYY-MM-DDTHH:mm:ss")).toDate();

  return (
    <View style={CONTAINER_STYLE}>
      <Text style={{ ...TEXT_STYLE, alignSelf: "center" }}>
        When do you want to send this memory?
      </Text>
      <DateTimePicker
        style={{ alignSelf: "center" }}
        value={convertedDate(date)}
        onChange={(d) => {
          if (!!d.nativeEvent.timestamp) {
            console.log(d.nativeEvent.timestamp);
            setDate(new Date(d.nativeEvent.timestamp));
          }
        }}
        minimumDate={new Date()}
        mode="datetime"
      />
      <TouchableOpacity
        disabled={!date}
        onPress={onSubmit}
        style={{ ...BUTTON_STYLE, opacity: !!date ? 1 : 0.5 }}
      >
        <Text style={BUTTON_TEXT_STYLE}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetDate;
