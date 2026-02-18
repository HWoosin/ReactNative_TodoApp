import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native';
import { images } from '../image';

const Icon = styled.Image`
    tint-color:${({theme}) => theme.text};
    width:30px;
    height:30px;
    margin:10px;
`;

const IconButton = ({type, onPressOut}) => {
    return (
        <TouchableOpacity onPressOut={onPressOut}>
            <Icon source={type}/>
        </TouchableOpacity>
    );
    // IconButton 호출할때마다 원하는 이미지 종류를 props에 type으로 전달
  
};

IconButton.proptype = {
    type:PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut:PropTypes.func
};

export default IconButton;
