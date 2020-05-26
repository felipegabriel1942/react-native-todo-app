import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onPressTodo }) => {
    return <TouchableOpacity onPress={onPressTodo}>
        <View style={styles.line}>
            <Text style={[
                styles.lineText,
                todo.done ? styles.lineThourgh : null
            ]}>
                { todo.text }
            </Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    },
    lineThourgh: {
        textDecorationLine: 'line-through'
    }
});

export default TodoListItem;