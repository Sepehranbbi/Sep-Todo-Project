import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { length } = this.props;
        return (
            <div className='headerStyle'>
                <h1> react Todo App </h1>
                <h6 className='itemsStyle'>
                    <span> Total {length} item </span>
                    <span> {length} item done </span>
                    <button onClick={() => this.props.Clear()}> clear All Done Items </button>
                </h6>
            </div>
        );
    }
}
export default Header