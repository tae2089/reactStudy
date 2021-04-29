import {React,useState,useMemo,useCallback} from 'react'
import Table from 'components/act/Table'
import CreateUser from 'components/act/CreateUser'
function App1(){

    // 데이터 생성하기
        const [inputs, setInputs] = useState({
        name: '',
        email: '',
        age: 0
        });
    //입력 부분 감지하기
    const onChange = useCallback(
        e => {
            // 여기서 name 은 입력 문구 태그의 name을 뜻함
            // value는 인풋에 있는 데이터를 의미함
            const {name, value} = e.target;
            //데이터 새로 고쳐쓰기
            setInputs({
                ...inputs,
                [name]: value
                });
        },
        [inputs],
    )

        const {name ,email, age} = inputs;
        const columns = useMemo(
        () => [
        {
            accessor: "name",
            Header: "Name",
        },
        {
            accessor: "email",
            Header: "Email",
        },
        {
            accessor: "age",
            Header: "Age",
        },
        ],[])

        const [data, setdata] = useState([
                {
                    name: "test1",
                    email: "tae2089@naver.com",
                    age: 12
                },
                {
                    name: "test2",
                    email: "tae2089002@naver.com",
                    age: 13
                },                
                {
                    name: "test3",
                    email: "tae2089003@naver.com",
                    age: 14
                }
            ])
    // 데이터 입력
            const onCreate = useCallback(
                () => {
                    const user = {
                        name,
                        email,
                        age
                    }
                    setdata([...data,user]);
                    setInputs({
                        name: '',
                        email: '',
                        age:0
                    })
                },
                [data,name,email,age],
            )
    return (
        <div>
            <CreateUser onCreate= {onCreate} onChange = {onChange} username = {name} email = {email} age = {age} />
            <Table  columns={columns} data={data} />
        </div>
    )
}

export default App1;