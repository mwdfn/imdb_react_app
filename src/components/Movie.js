import React from "react";

const Movie = ({name, url}) => {
    return(
        <>
        <li>
            <ul>
                <h2><a className = "movieLink" href={url}>{name}</a></h2>
            </ul>
        </li>
        </>
    )  
}

export default Movie

