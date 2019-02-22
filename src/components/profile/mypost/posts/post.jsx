import React from 'react';
import s from './post.module.css';

const Post = (props) =>{
    return (
                <div className={s.item}>
                    <img src="http://kinosweet.net/_bd/3/44835972.jpg" alt=""/>
                    {props.message}
                    <div>
                         <span>like</span> {props.likecount}
                    </div>
                </div>
            )     
}
export default Post;