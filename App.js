import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [height, setHeight] = useState("0");
  const [mass, setMass] = useState("0");
  // const [resultNumber, setResultNumber] = useState("0");
  const [result, setResult] = useState("");

  const bmiCalculator = () => {

    let imc = (mass) / (height * height);
    if (imc < 18.5) {
      setResult("UnderWeight");
    } else if (imc > 18.5 && imc < 25) {
      setResult("Normal Weight");
    } else if (imc > 25 && imc < 30) {
      setResult("OverWeight");
    } else {
      setResult("Obesity");
    }

  }
  return (
    <View>
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.container}>
          <Image
            source={require("./assets/logo.png")}
            style={{
              width: '200px',
              height: '150px',
              margin: 'auto',
              marginTop: 50,
              borderRadius: 20
            }}
          />
          {/* <Text
          style={{
            color: "#FFCB1F",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 30,
            fontSize: 30,
            fontWeight: 'bold'
          }}>
          BMI Calculator
      </Text> */}
          <View style={styles.intro}>
            <TextInput
              placeholder="Height (in m)"
              keyboardType='decimal-pad'
              style={styles.input}
              onChangeText={(height) => {
                setHeight(height);
              }}
            />
            <TextInput
              placeholder="Mass (in kg)"
              keyboardType="decimal-pad"
              style={styles.input}
              onChangeText={(mass) => {
                setMass(mass);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={bmiCalculator}
          >
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>
          <Text style={styles.result}>{result}</Text>
        </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    flexDirection: 'row',
    margin: 50
  },
  input: {
    height: 50,
    textAlign: "center",
    width: "50%",
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#000000',
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    fontSize: 20,
    marginTop: 24,
    textDecoration: 'none',
    color: "#000000"
  },
  button: {
    backgroundColor: "#1D1D1B",
    borderRadius: 10
  },
  buttonText: {
    alignSelf: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    color: "#FFCB1F",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontWeight: '900',
    fontSize: 30,
    marginTop: 30,
    padding: 15
  },
});
