import React from 'react'
import s from './Message.module.css'


export type MessagePropsType = {
    message: MessageType

}
type MessageType = {
    id: string
    user: UserType,
    message: MessageBodyType

}
type UserType = {
    avatar: string,
    name: string,
}

type MessageBodyType = {
    text: string,
    time: string
}


export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s.imageAndText}>
                <div className={s.timeAndImg}>
                    <img
                        src={props.message.user.avatar}


                    />
                    <div  className={s.time}>
                        {props.message.message.time}

                    </div>
                </div>

                <div className={s.text}>

                    <div  className={s.name}>
                        {props.message.user.name}

                    </div>
                    <pre className={s.messageText}>
                         {props.message.message.text}

                    </pre>
                </div>

            </div>

        </div>
    )
}


