import React from 'react'

const ImageList = (props) =>{
    const images = props.images.map(({description, id, urls})=>{
        return <img alt={description} key={id}src={urls.regular}></img>
    })
    return(
        <>
        {images}
        </>
    )
}

export default ImageList