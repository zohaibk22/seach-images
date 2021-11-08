import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props){
        super(props)

        this.imageRef = React.createRef()

    }

    componentDidMount(){
        console.log(this.imageRef.current.clientHeight)
    }
    render(){
        const {alt_description, urls} = this.props.image
        console.log(this.props.image)
        return (
            <>
                <img 
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.regular}
                    />
            </>
        )
    }
}

export default ImageCard