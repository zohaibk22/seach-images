import React, { Component } from 'react'

class SearchBar extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         userInput: ""
    //     }

    // }


    state={userInput: ""}
    // state={userInput:""}

    handleInputChange = (event) =>{
        // event.preventDefault();
        console.log(event.target.value)
        this.setState({userInput: event.target.value})
    }
    onInputClick = () => {
        console.log('input was clicked')
        

    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        // console.log(this.state.userInput)
        this.props.onSubmit(this.state.userInput)
        
    }
 
    render(){
        return(
            <>
                <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} className='ui form' action="">
                        <div className="field">
                            <label htmlFor="">Image Search</label>
                             <input type='text' value={this.state.userInput} onClick={this.onInputClick} onChange={this.handleInputChange}/>
                        </div>
                       
                    </form>
                </div>


            </>
        )
    }
}


export default SearchBar


