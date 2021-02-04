import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core'
import {auth,provider} from './Firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login(){
    const [state,dispatch]=useStateValue();
     
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).then((result)=>{
          dispatch({
              type:actionTypes.SET_USER,
              user:result.user
          })


            

        }).catch((err)=>(
            alert(err.message)
        ))
    }
      
    return (
        <>
        <div className="login">
            <div className="login__container">
                <img src="https://logodownload.org/wp-content/uploads/2019/08/slack-logo-1.png"  alt="slack"  />
                <h1>  sign in to slack.com</h1>
                <p> slack.com  </p>
                <Button onClick={signIn}> Sign in with google   </Button>
            </div>
        </div>


        </>
    )
}

export default Login