import React from 'react'
import PropTypes from 'prop-types';
import { Dimensions, useWindowDimensions } from 'react-native'; //다양한 모바일 기기에 대응하는 라이브러리
import { styled } from 'styled-components/native'

const StyledInput = styled.TextInput.attrs(({theme}) => ({placeholderTextColor: theme.main}))`
    //width:100%;
    width:${({width}) => width-40}px;
    height:60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground};
    font-size: 25px;
    color: ${({theme}) => theme.text};
`;

const Input = ({placeholder,value,onChangeText,onSubmitEditing,onBlur}) => {

    // const width = Dimensions.get('window').width;
    const width = useWindowDimensions().width; //useWindowDimensions 리액트가 제공하는 Hook중 하나, 화면의 크기에 따라 자동 업데이트 함.
    return (
        <StyledInput 
            width={width} 
            placeholder={placeholder} 
            maxLength={60}
            autoCapitalize='none'//자동대문자
            autoCorrect={false}//자동수정
            returnKeyType='done'//키보드 완료버튼
            keyboardAppearance='dark'//키보드 테마 다크
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
        />
    );
}

Input.proptypes ={ //허용 가능 한 형태 정의
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default Input;
