import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { theme } from './theme';
import styled, { ThemeProvider } from 'styled-components/native';
import react from 'react';
import Input from './components/input';

//SafeAreaView 아이폰 노치 가려짐 대비 - 자동 패딩값 적용됨
const Container = styled.SafeAreaView`
  flex:1;
  backgroundColor: ${({theme}) => theme.background};
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

export default function App() {
  const [newTask, setNewTask] = useState('');
  const _addTask = () => {
    alert(`Add: ${newTask}`);
    setNewTask('');
  };
  const _handleTextChange = text => {
    setNewTask(text);
  }
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
      </Container>
    </ThemeProvider>
  );
}
