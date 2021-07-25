import React from 'react';

import classnames from 'classnames';

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

    const isAllCompleted = props.todos.every( todo => todo.complete);

    return (
        <section id="main">
            <ul id="todo-list">
                <input
                    id="toggle-all"
                    type="checkbox"
                    checked={isAllCompleted}
                    onChange={
                        () => {props.onToggleAll()}
                    }
                />
                {[...props.todos.values()].reverse().map(todo => (
                    <TodoItem
                    key={todo.id}
                    editing={props.editing}
                    todo={todo}
                    onDeleteTodo={props.onDeleteTodo}
                    onEditTodo={props.onEditTodo}
                    onEditStart={props.onEditStart}
                    onEditFinish={props.onEditFinish}
                    onToggleTodo={props.onToggleTodo}
                  />
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
    <div>
 
        <input
            autoFocus={true}
            id="new-todo"
            placeholder="What needs to be done?"
            value={props.draft}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    </div>
    )
}

function TodoItem(props) {
    const {editing, todo} = props;
    const isEditing = editing === todo.id;
    const onDeleteTodo = () => props.onDeleteTodo(todo.id);
    const onStartEditingTodo = () => props.onEditStart(todo.id);
    const onToggleTodo = () => props.onToggleTodo(todo.id);

    let input = null;

    if(isEditing) {
        const onChange = (event) => props.onEditTodo(todo.id, event.target.value);
        const onStopEditingTodo = props.onEditFinish;
        const onKeyDown = (event) => {
            if(event.keyCode === ENTER_KEY_CODE){
                onStopEditingTodo();
            }
        }
        input =
            <input
                autoFocus={true}
                className="edit"
                value={todo.text}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
    }
    return (
        <li
          className={classnames({
            completed: todo.complete,
            editing: isEditing,
          })}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.complete}
              onChange={onToggleTodo}
            />
            <label onDoubleClick={onStartEditingTodo}>
              {todo.text}
            </label>
            <button className="destroy" onClick={onDeleteTodo} />
          </div>
          {input}
        </li>
      );



  
}

export default AppView;