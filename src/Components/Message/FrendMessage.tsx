import React from 'react'
import s from './FrendMessage.module.css'

export type MessagePropsType = {
    message : MessageType

}
type MessageType = {
    id : number
    user : UserType,
    message : MessageBodyType

}
type UserType = {
    avatar: string,
    name: string,
}

type MessageBodyType = {
    text: string,
    time: string
}

const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.friendTimeAndImg}>
                    <img
                        src={props.message.user.avatar}
                    />
                    <div
                        className={s.friendTime}
                    >
                        {props.message.message.time}

                    </div>
                </div>

                <div className={s.friendText}>
                    <div
                        className={s.friendName}
                    >
                        {props.message.user.name}

                    </div>
                    <pre
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}

                    </pre>
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
