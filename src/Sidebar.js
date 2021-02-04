import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarOption  from './SidebarOption';
import  db from './Firebase';
import { useStateValue } from './StateProvider';

function Sidebar(){
    const [channel,setchannel]=useState([]);
    const [{user}]=useStateValue();
    useEffect(()=>{

        db.collection('rooms').onSnapshot(snapshot=>(
            setchannel(snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name,
                
            })))
        ))
    },[])
    return (
        <>
        <div className="sidebar">
        <div className="sidebar__header">
        <div className="sidebar__info">
            <h2> {user?.displayName}</h2>
            <h3>  
            <FiberManualRecord  />
            Kjjindal
             </h3>
        </div>
        <Create  />
      


        </div>
        <SidebarOption Icon={InsertComment}  title="Thereads"   />
        <SidebarOption Icon={Inbox}  title="Mention"   />
        <SidebarOption Icon={Drafts}  title="Mention"   />
        <SidebarOption Icon={BookmarkBorder}  title="Mention"   />
        <SidebarOption Icon={PeopleAlt}  title="Mention"   />
        <SidebarOption Icon={Apps}  title="Mention"   />
        <SidebarOption Icon={FileCopy}  title="Mention"   />
        <SidebarOption Icon={ExpandLess}  title="Mention"   />

       
        <hr />
        <SidebarOption Icon={ExpandMore}  title="Channel"   />
        <hr  />        
        <SidebarOption Icon={Add} title="Add Channel" addChannelOption  />
        {channel.map(channel=>(
            <SidebarOption  title={channel.name}  id={channel.id}  />
        ))}

            
        </div>


        </>
    )
}

export default Sidebar;