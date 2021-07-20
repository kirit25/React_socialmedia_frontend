import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import "./feed.css";
import { Posts } from "../../dummyData";


export default function Feed() {
    return (
        <div class="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p)=>(
                    <Post key={p.id}post={p}/>
                ))}
            </div>     
        </div>
    )
}
