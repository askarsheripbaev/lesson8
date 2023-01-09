import React, {useEffect, useState} from 'react';
import PostItem from "./components/post";
import {Link} from "react-router-dom";

function App() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        (async () => {
            try{
                setIsLoading(true)
                const data = await getPosts()
                setPosts(data)

            } catch (e){

            }finally {
                setIsLoading(false)
            }

        })()
        // getPosts().then(setPosts)

    }, [])

    const getPosts = async () => {
        const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return data
    }

    if (isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

if (!posts.length){
    return (
        <div>No data</div>
    )
}

  return (
   <div className={'container'}>
       {posts.map((item, idx) => {
           return(
               <div className={'posts'}>
                   <Link key={idx} to={`/posts/${item.id}`}>
                       <PostItem title={item.title} />
                   </Link>
               </div>

               )}
       )}

   </div>
  );
}

export default App;
