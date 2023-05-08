import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = (props) => {
    let { dataId } = props
    const [posts, setPosts] = useState([]);

    let newPost = posts.filter((post) => dataId == post.userId);

    const getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setPosts(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {
                newPost && newPost.map((item) => {
                    return <div style={{border:'1px solid gray', padding:10 ,margin:10}} key={item.id}>
                        <h3 style={{backgroundColor:'black' , color:'white' , padding:10, display:'inline-block'}}>{item.id}</h3>
                        <p><span style={{fontWeight:700 , color:'green'}}>Title:</span>  {item.title}</p>
                        <p><span style={{fontWeight:700 , color:'green'}}>Description:</span>{item.body}</p>

                    </div>
                })
            }
        </div>
    )
}

export default Post
