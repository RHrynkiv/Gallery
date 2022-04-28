import React from 'react'
import style from "../Gallery.module.css";
type WrapPropsType = {
    IMG: string
    ClickedOnBlur: () => void
}

function Wrap(props:WrapPropsType){
    return(
        <div className={style.wrap}>
            <div className={style.close} onClick={props.ClickedOnBlur}>X</div>
            <img src={props.IMG} alt='Picture' style={{width: "1000px", height:"auto"}}/>
        </div>
    )
}
export default Wrap