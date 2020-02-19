import React, { Component } from 'react';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    handledelItem = () => {
        this.props.remove(this.props.index)
    }

    updateTasts = (e) => {
        this.props.updateTasts(e.target.value, this.props.index)
    }

    render() {
        const { key, text, index, removeitem } = this.props
        return (
            <div className='TodoStyle' key={key}>
                <input onChange={this.updateTasts} className='content' value={this.state.text} />
                <button onClick={this.handledelItem} className='close'> X </button>
            </div>
        );
    }
}

export default Item