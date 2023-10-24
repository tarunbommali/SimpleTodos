import './index.css'

const TodoItem = props => {
  const {eachTodoDetails, onDeleteItem} = props
  const {title, id} = eachTodoDetails
  return (
    <li className="todo-item">
      {title}
      <button
        className="delete-btn"
        type="button"
        onClick={() => onDeleteItem(id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
