import React from 'react';
import './style.css'

const ButtonNormal = (props) => {
  return <button className="button-normal" onClick={props.click}><span>{props.title}</span><i className={props.icon}></i></button>
  ;
};

export default ButtonNormal;
