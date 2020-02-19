import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    ChanegInputValue = (even) => {
        this.setState({ text: even.target.value })
    }
    AddToList = (e) => {
        e.preventDefault();
        const NewItem = this.state.text
        if (NewItem != '') {
            this.props.addtoList(NewItem)
        }
    }

    render() {
        return (
            <div className='inputStyle'>
                <form onSubmit={(e) => this.AddToList(e)}>
                    <input className='input' type='text' onChange={(even) => this.ChanegInputValue(even)} />
                    <button className='btn' > ADD </button>
                </form>
            </div>
        );
    }
}

export default Input;