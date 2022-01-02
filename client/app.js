import React from 'react';

const App = ({name}) => {
    return(
        <p onClick={()=>{console.info('Hello world from client....');}}>Hello world...  from react {name}</p>
    )
}

export default App;