import React, { useEffect, useState } from 'react';

import {useParams} from 'react-router-dom';
import { ChatBubble, InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import db from './Firebase';
import './Chat.css';
import Message from './Message'
import ChatInput from './ChatInput';

function Chat(){

    const {roomId} =useParams();
    const [roomdetails,setroomdetails]=useState(null);
    const [roommessages,setroommessages]=useState(null)


    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                
setroomdetails(snapshot.data())
            ))

            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapshot)=>(
                setroommessages(snapshot.docs.map(doc=>doc.data()))
            ))


        }


    },[roomId])

    return (
        <>
        <div className="chat">
        <div className="chat__header">
            <div className="chat__headerleft">
            <h4  className="chat__channelname">

            <strong >#{roomdetails?.name }</strong>
            {/* <StarBorderOutlined /> */}
            


            
            
               </h4>
               <p> <ChatBubble />
            <strong > {roommessages?.length} </strong>   </p>
            

            </div>
             
            <div className="chat__headerright">
            <p>
            <InfoOutlined /> Details
            
             </p>

            </div>

        </div>
        <div className="chat__messages">
            {roommessages?.map(messages=>(
                <Message  user={messages.user} userImage={messages.userImage}  timestamp={messages.timestamp}  message={messages.message}     />
            ))}
        </div>
        <ChatInput channelName={roomdetails?.name}  channelId={roomId} />

        </div>


        </>
    )
}


export default Chat