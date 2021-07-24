import React from 'react';

function AppView(props) {
    return <div>
        <Header {...props} />
        <Main {...props} />
        <Footer {...props} />
    </div>
}

function Header(props){
    return (
        <header id="header">
            <h1>todos</h1>
            <NewTodo {...props}/>
        </header>
    )
}

function Main(props) {
    if(props.todos.size === 0){
        return null;
    }
    return (
        <section id="main">
            <ul id="todo-list">
                {[...props.todos.values()].reverse().map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.complete}
                                onChange={
                                    () => {props.onToggleTodo(todo.id)}
                                }
                            />
                            <label>{todo.text}</label>
                            <button
                                className="destroy"
                                onClick={
                                    () => {props.onDeleteTodo(todo.id)}
                                }
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

function Footer(props) {
    if (props.todos.size === 0) {
        return null;
    }
const remaining = props.todos.filter(todo => !todo.complete).size;
const phrase = remaining === 1 ? ' item left' : ' items left';

const hasCompleted = props.todos.some(todo => todo.complete);

const handleDeleteButtonClick = () => {
    props.onClearComplete()
}

    return (
        <footer id="footer">
            <span id="todo-count">
                <strong>
                    {remaining}
                </strong>
                {phrase}
            </span>
            <button id="todo-delete" onClick={handleDeleteButtonClick}>
                <strong>
                    {hasCompleted &&  'Clear completed'}
                </strong>
            </button>
        </footer>
    )
}

const ENTER_KEY_CODE = 13;
function NewTodo(props) {
    const addTodo = () => props.onAdd(props.draft);
    const onBlur = () => addTodo();
    const onChange = (event) => props.onUpdateDraft(event.target.value);
    const onKeyDown = (event) => {
        if(event.keyCode === ENTER_KEY_CODE){
            addTodo();
        }
    }

    return (
        <input
            autoFocus={true}
            id="new-todo"
            placeholder="What needs to be done?"
            value={props.draft}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default AppView;