import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props){
        super(props)

        this.imageRef = React.createRef()

        this.state = {
            spans: 0,
        }

    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () =>{
        console.log(this.imageRef.current.clientHeight, "Zohaib")
        const height = this.imageRef.current.clientHeight
        
        const spans = Math.ceil(height/ 10)

        // this.setState({spans: spans}) 
        // es2015 way to do this
        this.setState({spans})

    }
    render(){
        const {alt_description, urls} = this.props.image
        console.log(this.props.image)
        return (
            <>
                <img style={{gridRowEnd: `span ${this.state.spans}`}}
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.regular}
                    />
            </>
        )
    }
}

export default ImageCard