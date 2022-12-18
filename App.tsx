import { StyleSheet } from "react-native";
import Navigation from "./navigation/navigation";

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#563333",
    alignItems: "center",
    justifyContent: "center",
  },
});
