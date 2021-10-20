import React, {useState, useEffect} from 'react';
import { db } from './firebaseConfig';
import Filters from './Filters';
import Posts from './Posts';

import './Feed.css';

function Feed() {

    // const [filters, setFilter] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        db.collection("videos").onSnapshot(snapshot => (
            setVideos(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ));
    }, [])


    return (
        <div className="feed">
            <div className="feedFilters">
                <ul className="feedFilters__list">
                    <li className="feedFilters__item active">All</li>
                    {
                        videos.map(({id, data: {category}}) => (
                            <Filters 
                                key={id}
                                category={category}
                            />
                        ))
                    }
                </ul>
            </div>
            <div className="posts">
                {
                    videos.map(({id, data: {thumbnailURL, time, url, userPhotoURL, userURL, user, title, category } }) => (
                        <Posts 
                            key={id}
                            thumbnailURL={thumbnailURL}
                            time={time}
                            url={url}
                            userPhotoURL={userPhotoURL}
                            userURL={userURL}
                            user={user}
                            title={title}
                            // stats={stats}
                            category={category}
                        />
                    ))
                }
            </div>
        </div>
        
    )
}

export default Feed
