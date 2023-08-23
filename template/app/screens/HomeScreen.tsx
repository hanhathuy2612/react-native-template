import {RootStackParamList} from "../navigator/RootListParameters";
import {Button, Text} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Screen from "../layouts/Screen";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({navigation}: Props) => {
  return (
    <Screen>
      <Text>Home</Text>
      <Button title={"Login"} onPress={() => navigation.navigate("Login")}/>
    </Screen>
  );
};

export default HomeScreen;
