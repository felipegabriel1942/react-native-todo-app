import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import Input from './Input';
import { addTodo, setTodoText, updateTodo } from '../actions';

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
        const { todo } = this.props;

        if(todo.id) {
            this.props.dispatchUpdateTodo(todo);
        } else {
            const { text } = todo;
            this.props.dispatchAddTodo(text);
        }
    }

    render() {
        const {text, id} = this.props.todo;

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
                        title={id ? 'Editar' : 'Adicionar'}/>
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

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(
    mapStateToProps, 
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo
    }
)(TodoForm);