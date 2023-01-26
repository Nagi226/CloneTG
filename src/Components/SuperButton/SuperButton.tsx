import React from 'react';
import s from './SuperButton.module.css'
import Button from "@mui/material/Button";


type SuperButtonPropsType ={
    name: string
    callBack: () => void
    disabled: boolean
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    startIcon: any
}

export const SuperButton = (props: SuperButtonPropsType ) => {

    const onClickHandler = () => {
      props.callBack()
    }
return(

    <div className={s.wrapperButton}>
        {/*<button disabled={props.disabled} className={s.button} onClick={onClickHandler}>{props.name}</button>*/}
        <Button
            disabled={props.disabled}
            className={s.button}
            onClick={onClickHandler}
            variant="contained"
            color={props.color}
            startIcon={props.startIcon}
        >
            {props.name}
        </Button>

    </div>

)
}

