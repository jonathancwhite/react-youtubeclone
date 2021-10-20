import React from 'react'
import './scss/Posts.scss'

function Posts({thumbnailURL, time, url, userPhotoURL, userURL, user, title, category}) {
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    let timeFormatted = '';

    var titleFormatted = title.length > 50 ? title.substring(0,50) + '...' : title;
    
    if (hours > 0) {
        timeFormatted = `${hours}:${minutes}:${seconds}`;
    } else if (seconds < 1) {
        timeFormatted = `${minutes}:${seconds}0`;
    } else {
        timeFormatted = `${minutes}:${seconds}`;
    }
    
    
    return (
        <div className="post" data-category={category}>
            <div className="post__upper">
                <div className="post__thumbnail">
                    <a href={url}>
                        <img src={thumbnailURL} alt={title}/>
                    </a>
                </div>
                <div className="post__time">
                    <p>{timeFormatted}</p>
                </div>
            </div>
            
            <div className="post__info">
                <img src={userPhotoURL} alt={user} className="post__avatar" />
                <div className="post__info--main">
                    <h3>{titleFormatted}</h3>
                    <a href={userURL} className="post__profile"><h4>{user}</h4></a>

                </div>
            </div>
        </div>
    )
}

export default Posts
