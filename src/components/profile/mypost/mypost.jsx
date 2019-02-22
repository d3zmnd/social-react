import React from 'react';
import s from './mypost.module.css';
import Post from './posts/post';

const Mypost = (props) =>{
    return <div>
                My posts
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>add</button>
                </div>
                <div className={s.posts}>
                <Post message="hi,sup dogs?" likecount='0'/>
                </div>
            </div>        
}
export default Mypost;