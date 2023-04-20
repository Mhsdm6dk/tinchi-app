import React, { useEffect, useState } from 'react'
import Logo from '../Home/logo';
import Signin from '../SignIn/Signin';

function Render() {

    const [change,SetChange]=useState(false);

    useEffect(()=>{
setTimeout(()=>{
SetChange(true)
},4000)
    },[])

    return (change)?(
        <Signin/>
    ): <Logo/>
}

export default Render
