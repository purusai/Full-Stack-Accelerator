import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const response = async (){
          fetch("https://api.github.com/users/purusxyz")
        .then(res => res.json)
        .then(data => {
            console.log(data);
            setData(data)
        })
        }
        
       
    }, [])
  return (
    <div className='text-center m-4 bg-gray-950 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img 
      className=''
      src={data.avatar_url} alt="Git Profile picture" width={300} />
    </div>
  )
}

export default Github
