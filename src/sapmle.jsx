
class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                {this.props.todo}
                <span className="removeBtn" onClick={this.props.removeTodo}></span>
            </div>
        )
    }
}

class TodoList extends React.Component {
    removeTodo(event) {
        this.props.removeTodo(event.index);
    }
    render() {
        const { todos } = this.props;
        return (
            <div className="todoList">
                {todos.map((todos, index) => {
                    return <Todo key={index} todo={todos} removeTodo={(event) => this.removeTodo({ index })} />
                })}
            </div>
        )
    }
}

class CreateTodoDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
    }
    AddTodo() {
        if (this.state.inputText !== '') {
            this.props.addTodoFun(this.state.inputText);
            this.setState({
                inputText: ''
            })
        }
    }
    ChangeText(even) {
        this.setState({
            inputText: even.target.value
        })
    }
    render() {
        return (
            <div className="createTodo">
                <input value={this.state.inputText} onChange={(even) => this.ChangeText(even)} />
                <button className="btn" onClick={() => this.AddTodo()}>Submit</button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosData: ['Todo item 1', 'Todo item 2', 'Todo item 3']
        };
    }
    AddTodoFun(newTodo) {
        this.setState({
            todosData: [...this.state.todosData, newTodo]
        })
    }
    RemoveTodo(del) {
        var array = [...this.state.todosData];
        array.splice(del, 1);

        this.setState({
            todosData: array
        })
    }
    render() {
        return (
            <div>
                <h1 className="title text-yellow">React Todo List</h1>
                <TodoList todos={this.state.todosData} removeTodo={(del) => this.RemoveTodo(del)} />
                <CreateTodoDiv addTodoFun={(newTodo) => this.AddTodoFun(newTodo)} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('box')
);
