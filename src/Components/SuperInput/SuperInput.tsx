import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./SuperInput.module.css"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


type SuperInputPropsType ={
    callBack: (value: string)=>void
    value: string
    callBackOnEnter: (value: string)=>void
    setError: ()=>void
}

export const SuperInput = (props: SuperInputPropsType) => {


    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.callBack(event.currentTarget.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        props.setError()
        if (event.key === 'Enter') {
            props.callBackOnEnter(event.currentTarget.value)
        }
    }
return(
<div>
    <textarea className={s.textarea} onChange={onChangeHandler} value={props.value} onKeyDown={onKeyDownHandler} placeholder={'Write a message ...'}/>

    <KeyboardReturnIcon className={s.keyboardReturnIcon} fontSize={'large'} color={ "disabled"}/>
</div>


)
}