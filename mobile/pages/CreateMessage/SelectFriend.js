import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import {
  BUTTON_STYLE,
  TEXT_STYLE,
  CONTAINER_STYLE,
  BUTTON_TEXT_STYLE,
} from "./style";

const SelectFriend = ({ onNext, selectedFriend, setSelectedFriend }) => {
  const friends = [
    { id: 1, name: "Jane Doe", imageUrl: "https://i.pravatar.cc/300" },
    { id: 2, name: "John Doe", imageUrl: "https://i.pravatar.cc/200" },
    { id: 3, name: "Alice Jenkins", imageUrl: "https://i.pravatar.cc/320" },
    { id: 4, name: "Bob Moss", imageUrl: "https://i.pravatar.cc/301" },
    { id: 5, name: "Aliyah Jones", imageUrl: "https://i.pravatar.cc/301" },
    { id: 6, name: "Ben Larkson", imageUrl: "https://i.pravatar.cc/301" },
    { id: 7, name: "Sam Holmes", imageUrl: "https://i.pravatar.cc/301" },
  ];

  return (
    <View style={CONTAINER_STYLE}>
      <Text
        style={{
          ...TEXT_STYLE,
          fontWeight: 600,
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 0,
        }}
      >
        Select a Friend
      </Text>
      <ScrollView style={{ height: 300, margin: 0 }}>
        {friends.map((friend, i) => (
          <Pressable
            onPress={() => {
              setSelectedFriend(friend.id);
            }}
            key={friend.id}
            style={{
              marginBottom: i < friends.length - 1 ? 15 : 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
              backgroundColor:
                selectedFriend === friend.id ? "lightgray" : "white",
            }}
          >
            <Image
              source={{
                uri: friend.imageUrl,
                width: 50,
                height: 50,
              }}
              style={{ borderRadius: 100 }}
            />
            <Text style={TEXT_STYLE}>{friend.name}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={onNext}
        style={{
          ...BUTTON_STYLE,
          marginTop: 0,
          opacity: !!selectedFriend ? 1 : 0.5,
        }}
        disabled={!selectedFriend}
      >
        <Text style={BUTTON_TEXT_STYLE}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectFriend;
