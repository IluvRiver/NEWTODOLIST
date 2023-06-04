import { StatusBar } from 'expo-status-bar';
import React, { useState,useContext } from 'react';
import { Text, StyleSheet, View, Platform} from 'react-native';
import uuid from 'react-uuid';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
export default function Main(){
    const [selected, setSelected] = useState('');
    const [Todos, setTodos] = useState([]);
    
    const addTodo = text => {
      setTodos([...Todos, { id: uuid(), textValue: text, checked: false, date: selected }]);
    };
    
    const filteredTodos = Todos.filter(todo => todo.date === selected);
    
      const onRemove = id => e => {
        setTodos(Todos.filter(Todo => Todo.id !== id));
      };
    
      const onToggle = id => e => {
        setTodos(
          Todos.map(Todo =>
            Todo.id === id ? {...Todo, checked: !Todo.checked} : Todo,
          ),
        );
      };
     
    
      return (
        <View style={styles.container}>
          
          <StatusBar style="auto" />
          
          <View style={styles.card}>
          
            <TodoInsert onAddTodo={addTodo} />
           
            <TodoList Todos={filteredTodos} onRemove={onRemove} onToggle={onToggle} />
    
          </View>
          
        </View>
      );
    
    }
    
    const styles = StyleSheet.create({
      calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        size : 50
      },
      container: {
        flex: 1,
        backgroundColor: "#4b7bec",
        padding: 50,
        alignItems: "center"
      },
      title: {
        color: "white",
        fontSize: 30,
        marginTop: 50,
        fontWeight: "400",
        marginBottom: 30,
        textAlign: "center",
      },
      card: {
        backgroundColor: "white",
        flex: 1,
        width: 400,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        ...Platform.select({
          ios: {
            shadowColor: "rgb(50, 50, 50)",
            shadowOpacity: 0.5,
            shadowRadius: 10,
            shadowOffset: {
              height: 30,
              width:0
            }
          },
          android: {
            elevation: 3
          }
        }),
      },
    });