import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const savedPosts = props.savedPosts;

    return ( 
                savedPosts.map((post) => { const { title, name, image, description } = post; 
                    return (
                        <div key={title} className={css.PostItem}>
                            <h2>{title}</h2>
                            <h3>{name}</h3>
                            <img src={image} alt={title}/>
                            <p>{description}</p>
                        </div>
                    )
                })
    )
}


export default PostItem