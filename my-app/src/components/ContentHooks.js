import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setFetchedPosts(savedPosts)
        }, 2000)
    }, [])

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        setFetchedPosts(filteredPosts)
    }

    return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Posts</h1>
            <div>
                <label htmlFor='searchInput'>Search: </label>
                <input onChange={handleChange} type='search' id='searchInput' placeholder='By Author' />
            </div>
            <div>
                <h4>posts found: {fetchedPosts.length}</h4>
            </div>
        </div>
        <div className={css.SearchResults}>
            {isLoaded ? 
            <PostItem savedPosts={fetchedPosts}/> : <Loader />
            
    }
        </div>
      </div>
  )
}

export default ContentHooks