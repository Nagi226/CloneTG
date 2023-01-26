import React, {FC} from 'react'
import s from './Sidebar.module.css'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
    userName:string
    avatar:string
}

export const Sidebar: FC<PropsType> = ({open, handleClose, ...props}) => {
    const sidebarClass = `${s.sidebar} ${open ? s.open : ''}`

    return (
        <div className= {`${open ? s.sidebarModal : ''}`}>
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose} title="close sidebar">
                    <img
                        src={closeIcon}
                    />
                </button>

                <div className={s.boxNameAndImg}>
                    <img className={s.imgInSidebar} src={props.avatar}/> <span>I`m {props.userName}</span>
                </div>

                <div className={s.boxUser}>
                    <h4>About me</h4>
                    <h4>Phone number</h4>
                    <h4>Bio</h4>

                </div>



            </aside>
        </div>
    )
}
