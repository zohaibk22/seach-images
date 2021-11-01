import React, { Component } from 'react'

class ImageCard extends Component {
    render(){
        return (
            <>
                <img 
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                    key={this.props.image.id}  />
            </>
        )
    }
}

export default ImageCard