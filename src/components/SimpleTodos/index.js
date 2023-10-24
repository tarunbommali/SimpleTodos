import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  onDeleteItem = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: filteredList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="app-container">
        <ul className="todos-container">
          <h1 className="heading">Simple Todos</h1>

          {todosList.map(eachTodoDetails => (
            <TodoItem
              key={eachTodoDetails.id}
              eachTodoDetails={eachTodoDetails}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
