import React, { Component } from 'react';
import './App.css';

import Header from './component/header'
import List from './component/List'
import Input from './component/input'




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

  handleupdateTasts = (text, i) => {
    const todo = this.state.TodoList;
    todo[i] = text;
    console.log(todo)
    this.setState({ TodoList: todo })
  }

  render() {
    return (
      <div className='formStyel' >

        <Header Clear={() => this.handleClear()} length={this.state.TodoList.length} />
        <List updateTasts={(text, index) => this.handleupdateTasts(text, index)} remove={(index) => this.remove(index)} items={this.state.TodoList} />
        <Input addtoList={(NItemm) => this.addtoList(NItemm)} />
      </div >
    );
  }
}

export default Todo;

