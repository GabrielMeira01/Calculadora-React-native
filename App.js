import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const buttons = [
    "C", "","", "/", 7,8,9,"*",4,5,6,"-",3,2,1,"+",0,",","=",
  ];
  const [res, setRes] = useState("");
  const [count, setCount] = useState("");
  const [resAnterior, setResAnterior] = useState("");

  function calculator() {
    const espacamento = res.split(" ");
    const num1 = parseFloat(espacamento[0].replace(",", "."));
    const num2 = parseFloat(espacamento[2].replace(",", "."));
    const operacao = espacamento[1];
    switch (operacao) {
      case "+":
        setRes((num1.toFixed(2)).toString());
        setCount(`${num1} + ${num2} =`);
        return;
      case "-":
        setRes((num1 - num2).toFixed(2).toString());
        setCount(`${num1} - ${num2} =`);
        return;
      case "*":
        setRes((num1 * num2).toFixed(2).toString());
        setCount(`${num1} * ${num2} =`);
        return;
      case "/":
        setRes((num1 / num2).toFixed(2).toString());
        setCount(`${num1} / ${num2} =`);
        return;
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed);
    if (
      (buttonPressed === "+") |
      (buttonPressed === "-") |
      (buttonPressed === "*") |
      (buttonPressed === "/")
    ) {
      setRes(res + " " + buttonPressed + " ");
      setCount(" ");
      return;
    }
    switch (buttonPressed) {
      case "C":
        setResAnterior("");
        setRes("");
        setCount("");
        return;
      case "=":
        setResAnterior(res + " = ");
        calculator();
        return;
    }

    setRes((res + buttonPressed));
    setRes(res + buttonPressed);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Gabriel Meira de Oliveira</Text>
      <Text style={styles.text}>RA: 2019203025</Text>
      <View style={styles.resultsCount}>
        <Text style={styles.resultCountText}>{count.replace(".", ",")}</Text>
      </View>
      <View style={styles.results}>
        <Text style={styles.resultText}>{res.replace(".", ",")}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === "="? (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={[styles.operatorbuttons, styles.button]}
            >
              <Text style={[styles.textOperatorButton, styles.resultButton]}>
                {button}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={[styles.button, styles.tranformButton]}
            >
              <Text style={[styles.textNumberButton, styles.resultButton]}>
                {button}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  results: {
    width: "100%",
    minHeight: 250,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  resultsCount: {
    position: "absolute",
    top: 200,
    right: -5,
  },
  resultText: {
    marginRight: 20,
    marginBottom: 30,
    fontSize: 50,
    color: "#fff",
  },
  resultCountText: {
    marginRight: 20,
    marginBottom: 30,
    fontSize: 35,
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  buttons: {
    borderTopColor: '#AAAAAA',
    borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 90,
    flex: 1,
  },
  textOperatorButton: {
    color: "#FFF",
    fontSize: 20,
  },
  textNumberButton: {
    color: "#FFF",
    fontSize: 20,
  },
  operatorbuttons: {
    backgroundColor: "#fea818",
    borderRadius: 100
  },
  Button: {
    color: "#000",
    fontSize: 30,
  },
  tranformButton: {
    backgroundColor: "#000",
  },
});
