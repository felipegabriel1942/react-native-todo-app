import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import Input from './Input';
import { addTodo, setTodoText } from '../actions';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        this.props.dispatchAddTodo(this.state.text);
        this.setState({text: ''});
    }

    render() {
        const {text} = this.state;

        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={text}/> 
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => this.onPress()} 
                        title='Adicionar'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 5
  },
  buttonContainer: {
    flex: 2
  }
});

export default connect(null, {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText
})(TodoForm);