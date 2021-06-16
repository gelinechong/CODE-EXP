import React, {useState} from "react";
import { Switch, View, Text } from "react-native";
import { style } from "./Styling";

// props {
//   title: string;
//   description: string;
// }

const Notification = ({ title, description }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            alignContent: "center",
          }}
        >
          <Text style={style.Heading}>{title}</Text>
          <Text style={style.general_text}>{description}</Text>
        </View>
        <View
          style={{
            alignContent: "center",
            paddingRight: 20
          }}
        >
          <Switch value={toggled} onValueChange={setToggled} />
        </View>
      </View>
    </View>
  );
};

export default Notification;
