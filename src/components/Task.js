import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';
import IconButton from './IconButton';
import { images } from '../image';
import PropTypes from 'prop-types';
import Input from './input';

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
  color: ${({theme, completed}) => (completed? theme.done : theme.text)};
  text-decoration-line: ${({completed}) => completed ? 'line-through' : 'none'};
`;

const Task = ({item, deleteTask, toggleTask, updateTask}) => {//할 일 내용 props로 전달

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    const _handleUpdateButtonPress = () => {//수정상태 관리, 클릭하면 true 됨
      setIsEditing(true);
    };
    const _onSubmitEditing = () => {
      if(isEditing){ //클릭해서 true 되면 해당 객체의 text값을 수정함
        const editedTask = Object.assign({}, item,{text});
        setIsEditing(false); //수정후 다시 false 변환
        updateTask(editedTask);
      }
    };
    const _onBlur = () =>{
      if(isEditing){
        setIsEditing(false);
        setText(item.text);//기존의 값 세팅
      }
    }

    return isEditing ? (//눌러서 true 되면 input 띄움
      <Input
        value={text}
        onChangeText={text => setText(text)}
        onSubmitEditing={_onSubmitEditing}
        onBlur={_onBlur}//포커스 잃으면 내용 초기화
      />

    ):(
      <Container>
        {/* item.completed의 값 true 또는 false에 따라 체크와 언체크 표시 */}
        <IconButton 
          type={item.completed? images.completed : images.uncompleted} 
          id={item.id} 
          onPressOut={toggleTask} 
          completed={item.completed}
        /> 

        <Contents completed={item.completed}>{item.text}</Contents>
        {item.completed || <IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>}
        {/* completed값에 따라 update 버튼 렌더링 막기 */}
        <IconButton 
          type={images.delete} 
          id={item.id} 
          onPressOut={deleteTask} 
          completed={item.completed}
        />
      </Container>
    )

}

Task.proptype = {
    item:PropTypes.object.isRequired,
    deleteTask:PropTypes.func.isRequired,
    toggleTask:PropTypes.func.isRequired
};

export default Task;

