import React, {useContext, useRef} from 'react'
import {GlobalContext} from '../context/GlobalState'
import App from '../App';

const Header = () => {
    const {state, setUserName, Logout} = useContext(GlobalContext);
    const userName = state.userName;
    const userNameInput = useRef('');

    const addUserNameHadler = () => {
        setUserName(userNameInput.current.value);
    }

    return (
        userName ?
        (<div><div className="header"> Hello, {userName} <button onClick={Logout}>Logout</button></div>
        <App/> 
        </div>
            ) :
        <div className="userNameInput">
        Please add your userName to proceed with App
         <input type="text" placeholder="username" ref={userNameInput}/>
         <button onClick={addUserNameHadler}>Add UserName</button>
        </div>
    )
}

export default Header
