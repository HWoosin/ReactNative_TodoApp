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
  const _addTask = () => {
    alert(`Add: ${newTask}`);
    setNewTask('');
  };
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
        <List width={width}>
          {/* text는 prop으로 넘겨줌 */}
          <Task text="woosin1"/>
          <Task text="woosin2"/>
          <Task text="woosin3"/>
          <Task text="woosin4"/>
        </List>
        {/* <IconButton type={images.uncompleted}/>
        <IconButton type={images.completed}/>
        <IconButton type={images.delete}/>
        <IconButton type={images.update}/> */}
      </Container>
    </ThemeProvider>
  );
}
