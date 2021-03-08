import React, { Component } from 'react'

class SearchBar extends Component {

    state={userInput:""}

    handleChange = (event) =>{
        // event.preventDefault();
        console.log(event.target.value)
        this.setState({userInput: event.target.value})
    }
    onInputClick = () => {
        console.log('input was clicked')

    }

    render(){
        return(
            <>
                <div className="ui segment">
                    <form className='ui form' action="">
                        <div className="field">
                            <label htmlFor="">Image Search</label>
                             <input type='text' value={this.state.userInput} onClick={this.onInputClick} onChange={this.handleChange}/>
                        </div>
                       
                    </form>
                </div>


            </>
        )
    }
}


export default SearchBar


