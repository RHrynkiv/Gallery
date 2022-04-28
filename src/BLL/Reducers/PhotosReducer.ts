import React from "react";
import {PhotosAPI} from "../../DAL/API";
import {Dispatch} from "redux";

const GET_DATA = 'GET_DATA'

const initialState: any = []
export const PhotosReducer = (state: Array<any> = initialState, action: any) => {
    switch (action.type) {
        case GET_DATA: {
            return [...action.data]
        }
        default: {
            return state
        }
    }
}
export const GetDataAC = (data: any) => {
    return ({type: GET_DATA, data})
}
export const GetDataTC = () => {
    return ((dispatch: Dispatch) => {
        PhotosAPI.getData()
            .then((res) => {
                dispatch(GetDataAC(res.data))
            })
    })
}