import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [operand, setOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const pressButton = (value) => {
        if (display === '0') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };
    const pressOperator = (operation) => {
        setOperand(parseFloat(display));
        setOperator(operation);
        setDisplay('0');
    };
    const calculate = () => {
        const num = parseFloat(display);
        switch (operator) {
            case '+':
                setDisplay((operand + num).toString());
                break;
            case '-':
                setDisplay((operand - num).toString());
                break;
            case '*':
                setDisplay((operand * num).toString());
                break;
            case '/':
                setDisplay((operand / num).toString());
                break;
        }
        setOperand(null);
        setOperator(null);
    };
    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttons}>
                <Button title="1" onPress={() => pressButton('1')} />
                <Button title="2" onPress={() => pressButton('2')} />
                <Button title="3" onPress={() => pressButton('3')} />
                <Button title="4" onPress={() => pressButton('4')} />
                <Button title="5" onPress={() => pressButton('5')} />
                <Button title="6" onPress={() => pressButton('6')} />
                <Button title="7" onPress={() => pressButton('7')} />
                <Button title="8" onPress={() => pressButton('8')} />
                <Button title="9" onPress={() => pressButton('9')} />
                <Button title="0" onPress={() => pressButton('0')} />
                <Button title="+" onPress={() => pressOperator('+')} />
                <Button title="-" onPress={() => pressOperator('-')} />
                <Button title="*" onPress={() => pressOperator('*')} />
                <Button title="/" onPress={() => pressOperator('/')} />
                <Button title="=" onPress={calculate} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    display: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    displayText: {
        fontSize: 24,
        color: '#333',
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
export default Calculator; 