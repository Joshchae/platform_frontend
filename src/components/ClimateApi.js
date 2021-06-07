import { useState, useEffect } from 'react'
import axios from 'axios'

function ClimateApi () {
    const [postData, setPostData] = useState([]);
    const fetchData = async () => {
        try {
            const posts = await axios.get('https://climate-migration-stories.herokuapp.com/posts')
              console.log('posts', posts.data.data);
              setPostData(posts.data.data);
        } catch (err) {
              console.log('error fetching /posts', err)
        }
    };
    
    useEffect(() => {
        fetchData()
    }, [])
    return postData
}

export default ClimateApi
