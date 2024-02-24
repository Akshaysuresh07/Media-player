import { commonApi } from "./commonApi"
import  {serverUrl} from "./serverUrl"

//upload video -store video in the database
export const uploadVideoAPI=async (video)=>{
    //semd res to add component
    return await commonApi('POST',`${serverUrl}/videos`,video)
}
//get all videos in view component
export const getAllVideosAPI=async()=>{
    return await commonApi('GET',`${serverUrl}/videos`)
}
export const saveHistoryAPI=async (videoDetails)=>{
    return await commonApi('POST',`${serverUrl}/history`,videoDetails)
}
export const getHistoryAPI=async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}