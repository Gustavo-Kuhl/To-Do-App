import { RemoveButton, EditButton } from './style'

const TodoItem = ({todo}) => {
     return (
          <li>
               {todo}
               <div className="buttons">
                    <EditButton>Edit</EditButton>
                    <RemoveButton>Remove</RemoveButton>
               </div>
          </li>
     )
}

export const TodoList = ({todo}) => {

     return (
          <ul>
               {todo.map((item, key) => {
                    if (item) {
                         return (
                              <TodoItem todo={item} key={key}/>
                         )
                    }
                    else {
                         return null
                    }
               })}
          </ul>
     )
}