import React, {useEffect, useState} from 'react'
import style from './Gallery.module.css'
import {GetDataTC} from "../BLL/Reducers/PhotosReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/Redux";
import Wrap from "./Wrap/Wrap";
import Picture from "./Pictures/Pictures";


function Gallery() {
    const data = useSelector<AppRootStateType, Array<any>>(state => state.photos)
    const [IsClicked, setIsClicked] = useState(false)
    const [IMG, setIMG] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        let thunk = GetDataTC();
        thunk(dispatch)
    }, [])

    const ClickedOnPicture = (photo: any) => {
        setIsClicked(true)
        setIMG(photo)
        window.scrollTo(0, 120)
        document.body.style.overflow = "hidden"
    }
    const ClickedOnBlur = () => {
        setIsClicked(false);
        document.body.style.overflow = ""
    }

    if (IsClicked) {
        return <div className={style.data}>
            <Wrap IMG={IMG} ClickedOnBlur={ClickedOnBlur}/>
            <Picture data={data} ClickedOnPicture={ClickedOnPicture}/>
        </div>
    }else {
        return (
            <div className={style.data}>
                <Picture data={data} ClickedOnPicture={ClickedOnPicture}/>
            </div>
        )
    }
}

export default Gallery