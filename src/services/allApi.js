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
export const removeHistoryAPI=async(id)=>{
    return await  commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}
export const removeVideoAPI=async(id)=>{
    return await  commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}
export const addCategoryAPI=async(category)=>{
    return await commonApi('POST',`${serverUrl}/categories`,category)
}
export const getCategoriesAPI=async()=>{
    return await commonApi('GET',`${serverUrl}/categories`)
}
export const removeCategoryAPI=async(categoryId)=>{
    return await commonApi('DELETE',`${serverUrl}/categories/${categoryId}`,{})

}
//getg single vidoe api
export const getSingleVideoAPI=async(videoId)=>{
    return await commonApi('GET',`${serverUrl}/videos/${videoId}`,'')
}
//update categories api
export const updateCategoryAPI=async(categoryId,updatedCategoryDetails)=>{
    return await commonApi('PUT',`${serverUrl}/categories/${categoryId}`,updatedCategoryDetails)
}
export const getSingleCategoryAPI=async(categoryId)=>{
    return await commonApi('GET',`${serverUrl}/categories/${categoryId}`,'')
}