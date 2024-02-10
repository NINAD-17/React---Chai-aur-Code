// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ninad-17')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            GitHub Followers: {data.followers}
        
        <img src={data.avatar_url} alt="GitHub profile image" width={300} className='rounded'/>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/Ninad-17`);
    return response.json();
}
