import React, {useEffect, useState} from 'react';
import s from './SuperHeader.module.css'
import burgerIcon from './burger.svg'
import {Sidebar} from "./sidebar/Sidebar";

type SuperHeaderPropsType = {
    userName:string
    avatar:string
}

export const SuperHeader:React.FC<SuperHeaderPropsType> = (
    {
        userName,
        avatar,
        ...props
    }

) => {

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    return (

<div>
           <Sidebar open={open} handleClose={handleClose} userName={userName} avatar={avatar} />
           <div className={s.header} onClick={handleOpen}><h3 className={s.headerUserAme}>{userName}</h3>
               <img className={s.burgerMenuIcon} src={burgerIcon}/></div>

</div>
    );
};

