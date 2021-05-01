import {React ,useState, useCallback,useReducer}from 'react'
import axios from 'axios'
import styled from'styled-components'


import LoginButton from 'components/Button/LoginButton'

const Container = styled.div`
    margin-top: 100px;
    padding: 20px;
`;

const Input = styled.input`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 40px;
    margin: 0 0 8px;
    padding: 5px 39px 5px 11px;
    border: solid 1px #dadada;
    background: #fff;
    box-sizing: border-box;
`;

const userReducer = (state, action) => {
  switch (action.type) {
    case 'id': {
      return { ...state, id: action.id }
    }
    case 'password': {
      return { ...state, password: action.password }
    }
    default: {
        return {...state}
    }
  }
}

function App3({history}){
    const initialState = {
        id:"",
        password: ""
    }    
    const [state, dispatch] = useReducer(userReducer, initialState)
    // const [loginInputs, setLoginInputs] = useState({
    //     id: '',
    //     password: ''
    // });


    const onChange = useCallback(
        e => {
            const{name, value} = e.target
            console.log(name,"-",value)
            const target = name
            switch (target){
                case "id":
                    dispatch({type:name, id:value})
                    break
                case "password":
                    dispatch({type:name, password:value})
                default: 
                    break
            }
        },
        [state],
    )

    const checkData= useCallback(
        () => {
            console.log("id",state.id)
            console.log("password",state.password)
            getResponse()
        },
    )
    const getResponse = async () => {
        console.log("test start")
        try{
                axios.post("/login",{
                    id: state.id,
                    password: state.password
                }).then(response => {
                    console.log(response.data)
                    console.log("test end")
                    // this.props.history.push("/")
                    history.push("/")
                })
        }catch(e){
            console.log(e)
        }
    }

    return (
    <Container>
      <Input id="id" name="id" placeholder="아이디를 입력해주세요" onChange={onChange}/>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      />
      <LoginButton onClick={checkData} value ={state} >로그인</LoginButton>
    </Container>
    )
}
export default App3;