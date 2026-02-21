import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native';
import { images } from '../image';

const Icon = styled.Image`
    tint-color:${({theme, completed}) => completed? theme.done : theme.text};
    width:30px;
    height:30px;
    margin:10px;
`;

const IconButton = ({type, onPressOut, id, completed}) => {
    const _onPressOut = () => {
        onPressOut(id)
    };

    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} completed={completed}/>
        </TouchableOpacity>
    );
    // IconButton 호출할때마다 원하는 이미지 종류를 props에 type으로 전달
  
};

IconButton.proptype = {
    type:PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut:PropTypes.func,
    id:PropTypes.string,
    completed:PropTypes.bool
};

export default IconButton;
