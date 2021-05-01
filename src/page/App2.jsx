import React, {useContext, createContext,useCallback} from 'react';

const TestContext = createContext();
const TestContext2 = createContext();

const UseContextExample = () => {
    const hello = useContext(TestContext);
    const world = useContext(TestContext2);
    const onClickEvent = useCallback(
        () => {
            console.log(hello);
        },
    )
    return (
        <div>
        {hello + ' ' + world}
        <button onClick={onClickEvent}> 안녕하세요 </button>
        </div>
    )
}

function App2() {
    
  return (
    <div className="App">
      <TestContext.Provider value='hello'>
        <TestContext2.Provider value='world!'>
          <UseContextExample />
        </TestContext2.Provider>
      </TestContext.Provider>
    </div>
  );
}

export default App2;