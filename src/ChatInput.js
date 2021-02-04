import React, { useState } from 'react';
import './ChatInput.css';
import db from './Firebase';
import firebase from 'firebase';
import {useStateValue} from './StateProvider';


function ChatInput({channelName,channelId}){

    const [input,setinput]=useState('');
    const [{user}]=useStateValue();

    const sendmessage=(e)=>{
        e.preventDefault();
        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user.displayName,
                userImage:user.photoURL
            })
            setinput('');

        }


    }
    return (
        <>
        <div className="chatinput">
        <form>
            <input type="text" onChange={(e)=>setinput(e.target.value)}  placeholder="Type Your Messages...." value={input}  />
            <button  onClick={sendmessage} type='submit' >SEND</button>
        </form>


        </div>


        </>
    )
}

export default ChatInput