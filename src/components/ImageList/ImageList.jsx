import React from 'react'
import './ImageList.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageList = (props) =>{
    // const images = props.images.map(({alt_description, id, urls})=>{
    //     return <ImageCard alt={alt_description} key={id}src={urls.regular} />
    // })
    console.log(props.images)
    const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}  />
    })

    return(
        <>
            <div className="image-list">
                {images}
            </div>
        
        </>
    )
}

export default ImageList