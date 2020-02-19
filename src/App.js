import React, { Component } from 'react';
import './App.css';

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
          <button onClick={() => this.props.Clear()}> clear All Done Items </button>
        </h6>
      </div>
    );
  }
}
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
              <Item remove={(i) => this.props.remove(i)} key={index} index={index} text={item} />
            </div>
          )
        })}
      </div>
    );
  }
}

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


class Item extends Component {
  constructor(props) {
    super(props);
  }

  handledelItem = () => {
    this.props.remove(this.props.index)
  }


  render() {
    const { key, text, index, removeitem } = this.props
    return (
      <div className='TodoStyle' key={key}>
        <span className='content'> {text} </span>
        <span onClick={this.handledelItem} className='close'> X </span>
      </div>
    );
  }
}






class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList: ['one', 'two']
    }
  }

  addtoList = (NItemm) => {
    this.setState({
      TodoList: [...this.state.TodoList, NItemm]
    })
  }


  remove = (item) => {
    console.log(item)
    const Nitems = this.state.TodoList;
    Nitems.splice(item, 1)
    this.setState({
      TodoList: Nitems
    })
  }

  handleClear = () => {
    console.log('claer');
    this.setState({
      TodoList: this.state.TodoList = []
    })
  }

  render() {
    return (
      <div className='formStyel' >
        <Header Clear={() => this.handleClear()} length={this.state.TodoList.length} />
        <List remove={(index) => this.remove(index)} items={this.state.TodoList} />
        <Input addtoList={(NItemm) => this.addtoList(NItemm)} />
      </div >
    );
  }
}
export default Todo;

