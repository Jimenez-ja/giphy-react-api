import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    // console.log({id, title, url});
    return (
        <div className='col-12 col-md-4 col-lg-2 card animate__animated animate__fadeIn'>
            <img className='img-thumbnail' src={url} alt={title}></img>
            <p> { title } </p>
        </div>
    )
}
