import style from "../Gallery.module.css";
import React from "react";

type DataArrayType = {
    alt_description: string|null
    blur_hash: string
    categories: Array<any>
    color: string
    created_at: string
    current_user_collections: Array<any>
    description: string|null
    height: number
    id: string
    liked_by_user: boolean
    likes: number
    links: {
        download: string
        download_location: string
        html: string
        self: string
    }
    promoted_at: string|null
    sponsorship:{
        impression_urls: Array<string>
        sponsor: any
        tagline: string
        tagline_url: string
    }
    updated_at: string
    urls:{
        full: string
        raw: string
        regular: string
        small: string
        small_s3: string
        thumb: string
    }
    user:{
        first_name: string|null
        id: string
        instagram_username: string|null
        last_name: string|null
        profile_image: {
            large: string
            medium: string
            small: string
        }
        name: string
        username: string
    }
}

type PicturePropsType = {
    data: Array<DataArrayType>
    ClickedOnPicture: (IMG: string) => void
}

const Picture= (props: PicturePropsType)=>{
    console.log(props.data)
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
