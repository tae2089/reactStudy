import {React} from 'react'
function CreateUser({ username, email, age, onChange, onCreate }) {
  return (
    <div>
      <input
        name="name"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange} 
        value={email}
      />
        <input
        name="age"
        placeholder="나이"
        onChange={onChange}
        value={age}
      />


      <button onClick={onCreate}>등록</button>
    </div>
  );
}


export default CreateUser;