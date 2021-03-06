import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import rootReducer from './reducers';

import { composeWithDevTools } from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: '192.168.15.6',
    port: 8000 });


const store = createStore(rootReducer, composeEnhancers());

export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
});