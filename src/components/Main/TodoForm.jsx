import { useState } from 'react';

export const TodoForm = ({ todo, setTodo }) => {

  const [inputValue, setInputValue] = useState('')

  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const submitValue = () => {
    setTodo([...todo, inputValue])
    setInputValue('')
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Code a dinosaur 🦖..."
        onChange={getInputValue}
        value={inputValue}
      />
      <button onClick={submitValue} type="submit">Save</button>
    </form>
  )

}