import React from 'react'

const ImageList = (props) =>{
    return(
        <>
        {props.images.map((image)=>(
            <div>
                <img src={image.urls.regular}></img>
            </div>
        ))}
        </>
    )
}

export default ImageList