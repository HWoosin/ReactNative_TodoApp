import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';
import IconButton from './IconButton';
import { images } from '../image';
import PropTypes from 'prop-types';

//할 일 내용, 항목 삭제 버튼, 수정 버튼 구성

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text`
  flex:1;
  font-size: 24px;
  color: ${({theme}) => theme.text};
`;

const Task = ({text}) => {//할 일 내용 props로 전달

    return (
      <Container>
        <IconButton type={images.uncompleted}/>
        <Contents>{text}</Contents>
        <IconButton type={images.update}/>
        <IconButton type={images.delete}/>
      </Container>
    )

}

Task.proptype = {
    text:PropTypes.string.isRequired
};

export default Task;

