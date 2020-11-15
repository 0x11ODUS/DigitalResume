import React from 'react';
import '../styles/styles.css'


export default function Button(props){
    return (
        <div className="Button" onClick={props.onClick}>
            {props.Text}
        </div>
    )
}