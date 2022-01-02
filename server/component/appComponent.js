import React from 'react';

const ChildComp = ()=>{
    return (<p>Child component</p>)
}

const app = ({name}) => {
    return(
        <p>Hello world...  from react <ChildComp/>{name}</p>
    )
}

export default app;