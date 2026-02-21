import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import { theme } from './theme';
import styled, { ThemeProvider } from 'styled-components/native';
import react from 'react';
import Input from './components/input';
import { images } from './image';
import IconButton from './components/IconButton';
import Task from './components/Task';

//SafeAreaView 아이폰 노치 가려짐 대비 - 자동 패딩값 적용됨
const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${({theme}) => theme.background};
  align-items:center;
  justify-content:flex-start;
`;
const Title = styled.Text`
  font-size:40px;
  font-weight:600;
  color: ${({theme}) => theme.main};
  align-self:flex-start;
  margin:20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width:${({width}) => width - 40}px;
`;

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    // '1':{id:'1', text: 'woosin1', completed:false},
    // '2':{id:'2', text: 'woosin2', completed:false},
    // '3':{id:'3', text: 'woosin3', completed:false},
    // '4':{id:'4', text: 'woosin4', completed:false},
  });
  const _addTask = () => {
    // alert(`Add: ${newTask}`);
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id:ID, text:newTask, completed:false}
    }
    setNewTask('');// input에 작성한 newTask를 다시 빈값으로 초기화
    setTasks({...tasks, ...newTaskObject});
  };
  const _deleteTask = id => {
    const currentTasks = Object.assign({},tasks); //assign(대상객체,복사할개체)
    delete currentTasks[id]; //복사한 task객체에서 해당 id를 가진 리스트 삭제
    setTasks(currentTasks); //task에 새로 만든 currentTasks 세팅
  };
  const _toggleTask = id => {
    const currentTasks = Object.assign({},tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed']; //특정 id의 completed 값을 뒤집음
    setTasks(currentTasks);
  }
  const _updateTask = item => {
    const currentTasks = Object.assign({},tasks);
    currentTasks[item.id] = item; 
    setTasks(currentTasks);
  }

  const _handleTextChange = text => {
    setNewTask(text);
  }
  const width = Dimensions.get('window').width;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* StatusBar 안드로이드 상태바 기려짐 대비 - 상태바 제어 가능하게 함 */}
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}/>
        <Title> Check List </Title>
        <Input 
          placeholder="Add a task..."
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask} 
          />
          {/* _addTask에 내용 작성시 newTaskObject로 ID키로 할일 내용을 세팅하고 newTaskObject 활용해서 Object의 value에 들어갈 tasks 세팅 */}
        <List width={width}>
          {/* text는 prop으로 넘겨줌 */}
          {/* <Task text="woosin1"/>
          <Task text="woosin2"/>
          <Task text="woosin3"/>
          <Task text="woosin4"/> */}
          {Object.values(tasks).reverse().map(item => (<Task key={item.id} item={item} deleteTask={_deleteTask} toggleTask={_toggleTask} updateTask={_updateTask}/>))}{/*역순 기입, 다른작업도 가능하게끔 item object를 전달.*/}
          
        </List>
        {/* <IconButton type={images.uncompleted}/>
        <IconButton type={images.completed}/>
        <IconButton type={images.delete}/>
        <IconButton type={images.update}/> */}
      </Container>
    </ThemeProvider>
  );
}
