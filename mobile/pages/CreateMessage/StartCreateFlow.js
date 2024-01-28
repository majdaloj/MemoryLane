import {
  TEXT_STYLE,
  CONTAINER_STYLE,
  BUTTON_STYLE,
  BUTTON_TEXT_STYLE,
} from "./style";
import { Text, TouchableOpacity, View } from "react-native";
import {
  faCameraRetro,
  faHandHoldingHand,
  faHeart,
  faLaugh,
} from "@fortawesome/free-solid-svg-icons";
import IconStatement from "./IconStatements";

const StartCreateFlow = ({ onContinue }) => {
  return (
    <View style={CONTAINER_STYLE}>
      <Text style={{ ...TEXT_STYLE, fontWeight: 600 }}>
        Remind a friend or loved one of a memory you share.
      </Text>
      <IconStatement
        iconDefinition={faCameraRetro}
        text={`Send a cherished photo \nor video of the two of \nyou together`}
      />
      <IconStatement
        iconDefinition={faHeart}
        text={`Write them a heart felt \nletter`}
      />
      <IconStatement
        iconDefinition={faLaugh}
        text={`Share an obscure inside \njoke only the two of you \n understand`}
      />
      <IconStatement
        iconDefinition={faHandHoldingHand}
        text={`Let them know that \nthey're on your mind!`}
      />
      <TouchableOpacity onPress={onContinue} style={BUTTON_STYLE}>
        <Text style={BUTTON_TEXT_STYLE}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartCreateFlow;
