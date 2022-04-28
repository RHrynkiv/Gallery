import style from "../Gallery.module.css";
import React from "react";

type PicturePropsType = {
    data: Array<any>
    ClickedOnPicture: (IMG: any) => void
}

const Picture= (props: PicturePropsType)=>{
    return(
        <>
            {
                props.data.map((e:any, i:number) => {
                    return <div onClick={() => props.ClickedOnPicture(e.urls.full)} key={i} className={style.photos}>
                        <div className={style.user}>
                            <div>
                                <img src={e.user.profile_image.small} alt='Picture'/>
                            </div>
                            <div className={style.name}>
                                {e.user.first_name} {e.user.last_name}
                            </div>
                            <div className={style.likes}>
                                {e.likes} likes
                            </div>
                        </div>
                        <img src={e.urls.small}/>
                    </div>
                })
            }
        </>
    )
}
export default Picture
