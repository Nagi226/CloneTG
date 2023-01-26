import React, {useState} from "react";
import {SuperInput} from "../SuperInput/SuperInput";
import {SuperButton} from "../SuperButton/SuperButton";
import { MessageType} from "../../App";
import s from './MessageSender.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CleaningServices from '@mui/icons-material/CleaningServices';




type MessagesSenderPropsType={
    messagesComponent: any
    frendMessagesComponent: any
    addMessages: (text: string, userName: string, avatar: string) => void
    deleteMessage: () => void
    messages: MessageType[]
    userName: string
    avatar: string
}

export const MessagesSender: React.FC<MessagesSenderPropsType> =
    ({
         messagesComponent,
         addMessages,
         deleteMessage,
         messages,
         userName,
         avatar,
        frendMessagesComponent,
         ...props
     }
) => {

    const maxMessages = 5
    const MessagesComponent = messagesComponent;
    const FrendMessagesComponent = frendMessagesComponent
    const [text, setText] = useState('')
    let [error, setError] = useState<string| null>(null)




    const addTaskHandler = () => {
        if(text.trim()===''){
            setError('Cant send empty')
            return
        }
        if (messages.length >= maxMessages){
            return;
        }
        addMessages(text.trim(),userName,avatar)
        setText('')
    }


    const clearMessage = () => {
        setText('')
    }

    const removeTaskHandler = () => {
        deleteMessage()
        if (messages.length < 6){
            setError(null)
        }
    }

    const oneChangeHandler = (value: string) => {
        setText(value);
    }

    let totalCount = maxMessages - messages.length

        const messagesList = messages.length
            ? messages.map(m => {
                    if (m.user.name === userName) {
                        return <MessagesComponent key={m.id} message={m}/>
                    } else {
                        return <FrendMessagesComponent key={m.id} message={m}/>
                    }
                }
            )
            : <div className={s.noMessages}>No messages</div>

    return(
<div>
        {messagesList}

    <div className={s.sendForm}>

        <SuperInput callBack={oneChangeHandler} value={text} callBackOnEnter={addTaskHandler} setError={()=>setError(null)}/>

        {/*<SuperButton disabled={false}  name={'ADD'} callBack={addTaskHandler} />*/}
        <SuperButton disabled={false}  name={'Clear Input'} callBack={clearMessage} color={"secondary"}
        startIcon={<CleaningServices />}/>
        <SuperButton disabled={false}  name={'Last mess'} callBack={removeTaskHandler} color={"primary"}
                     startIcon={<DeleteIcon />}/>


        {error && <div className={'error-message'}>{error}</div>}
    </div>
    <div className={s.messagesLeftCounter}>{totalCount}</div><div className={s.messagesLeft}>{' messages left'}</div>



</div>

    )
}