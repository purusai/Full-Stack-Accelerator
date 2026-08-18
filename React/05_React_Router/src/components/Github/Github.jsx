import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.github.com/users/purusxyz")
            const json = await res.json()
            console.log(json)
            setData(json)
        }

        fetchData()
    }, [])

    return (
        <div className='text-center m-4 bg-gray-950 text-white p-4 text-3xl'>
            
            {data ? (
                <>
                    <p>Github followers: {data.followers}</p>
                    <img 
                        src={data.avatar_url} 
                        alt="Git Profile" 
                        width={300} 
                        className="mx-auto mt-4 rounded-full"
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}

export default Github