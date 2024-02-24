import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI } from '../services/allApi'

function Watch() {
  const [history, setHistory] = useState([])
  const getAllHistory = async()=>{
    const res=await getHistoryAPI()
    if(res.status>=200&& res.status<300)
    {
      console.log(res.data);
      setHistory(res.data)

  }
  } 
  useEffect(() => {
    getAllHistory()
  })
  return (
   <>
    <div className="d-flex justify-content-between">
    <h2>Watch History</h2>
    <Link to={'/home'} ><i className='fa-solid fa-arrow-left pe-3'></i> Back to<i className="fa-solid fa-home ps-2"></i></Link>

    </div>

    <table  style={{background:'white'}}   className='table mt-5 mb-5 bg-white'>
    <thead>
      <tr style={{background:'white'}}>
        <th className='text-white'>#</th>
        <th>Video Caption</th>
        <th>Video Link</th>
        <th>Time Stamp</th>
        <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
      </tr>
    </thead>
      <tbody>
      {history?.length>0? history.map((video,index)=>(
        
        <tr key={index}>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a href={video?.youtubeLink} target='blank'></a>{video.youtubeLink}</td>
          <td>{video?.timeStamp}</td>
          <td><i className='fa-solid fa-trash text-danger'></i></td>
        </tr>
      ))
      :
      <tr className='text-danger'>
      Your watch history is empty
      </tr>
      }
     </tbody>
  </table>

   </>
  )
}

export default Watch