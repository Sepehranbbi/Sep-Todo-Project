import React, { Component } from 'react';
import Item from './../Item'

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items, removeitem } = this.props;
        return (
            <div className='ListStyle'>
                {items.map((item, index) => {
                    return (
                        <div>
                            <Item updateTasts={(update, index) => this.props.updateTasts(update, index)} remove={(i) => this.props.remove(i)} key={index} index={index} text={item} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default List;