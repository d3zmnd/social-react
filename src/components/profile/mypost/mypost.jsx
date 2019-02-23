import React from 'react';
import s from './mypost.module.css';
import Post from './posts/post';

const Mypost = (props) =>{
    let postData = [
                    { id: 1, message: 'Hi', likesCount: '1' },
                    { id: 2, message: 'Wuzzup, bro?', likesCount: 13},
                    { id: 3, message: 'Nice' },
                    { id: 4, message: 'Good luck' }

                ]

    return <div className={s.postBlock}>
                My posts
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button>add</button>
                    </div>
                </div>
                <div className={s.posts}>
            <Post message={postData[0].message} likecount={postData[0].likesCount} />
            <Post message={postData[1].message} likecount={postData[1].likesCount} />
                </div>
            </div>        
}
export default Mypost;