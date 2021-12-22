import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  

  const onNumberPress = text => {
    if (text == '=') {
      return onEqual();
    }
    setInputValue(inputValue + text);
  };

  const OnAc = () => {
    setInputValue('');
    setResultValue(0);
  };

  const onOperatorPress = operator => {
    let operators = ['*', '/', '-', '+', 'Del', 'AC'];

    

    if (operator == "Del") {
      return setInputValue(inputValue.toString().substring(0,inputValue.length-1))
    }

    if(operators.includes(inputValue.toString().split().pop)) return;

    setInputValue(inputValue + operator);
  };

  const onEqual = () => {
    setResultValue(eval(inputValue));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultValue}</Text>
      </View>
      <View style={styles.inputValue}>
        <Text style={styles.inputValueText}>{inputValue}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => onNumberPress(1)}>
              <Text style={styles.btnText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNumberPress(2)}>
              <Text style={styles.btnText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNumberPress(3)}>
              <Text style={styles.btnText}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => onNumberPress(4)}>
              <Text style={styles.btnText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNumberPress(5)}>
              <Text style={styles.btnText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNumberPress(6)}>
              <Text style={styles.btnText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => onNumberPress(7)}>
              <Text style={styles.btnText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNumberPress(8)}>
              <Text style={styles.btnText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNumberPress(9)}>
              <Text style={styles.btnText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => onNumberPress('.')}>
              <Text style={styles.btnText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNumberPress(0)}>
              <Text style={styles.btnText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onEqual}>
              <Text style={styles.btnText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.operators}>
          <TouchableOpacity onPress={() => onOperatorPress('Del')}>
            <Text style={styles.btnText}>Del</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={OnAc}>
            <Text style={styles.btnText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOperatorPress('*')}>
            <Text style={styles.btnText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOperatorPress('/')}>
            <Text style={styles.btnText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOperatorPress('-')}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOperatorPress('+')}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  inputValue: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  inputValueText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnText: {
    padding:15,
    // backgroundColor:'red',
    fontSize: 18,
    fontWeight: '500',
  },

  numbers: {

    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  operators: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Home;
