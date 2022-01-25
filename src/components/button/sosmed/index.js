import React from 'react'
import './style.css'

const ButtonSosmed = (props) => {
    return (
        <div className="sosmed">
            <div className={props.cName}>
                <div className="tooltip">{props.judul}</div>
                <span><i className={props.icon}></i></span>
            </div>
        </div>
    )
}

ButtonSosmed.defaultProps = {
    cName : 'icon whatsapp',
    judul : 'Whatsapp',
    icon : 'fab fa-facebook-f',
}

export default ButtonSosmed