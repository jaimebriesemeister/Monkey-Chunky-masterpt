import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import db from "./localdb";
import PhonicSoundButton from "./components/PhonicSoundButton";

console.log(db["the"].chunks);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={"#9c8210"}
            centerComponent={{
              text: "Macaquinho Fofo",
              style: { color: "#fff", fontSize: 20 },
            }}
          />

          <Image
            style={styles.imageIcon}
            source={{
              uri: "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
            }}
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({ chunks: db[this.state.text].chunks });
              this.setState({ phonicSounds: db[this.state.text].phones });
            }}
          >
            <Text style={styles.buttonText}>IR</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            {this.state.chunks.map((item, index) => {
              return (
                <PhonicSoundButton
                  wordChunk={this.state.chunks[index]}
                  soundChunk={this.state.phonicSounds[index]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8b8b8",
  },
  inputBox: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    outline: "none",
    borderRadius: 20,
  },
  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
