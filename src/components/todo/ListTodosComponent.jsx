import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsername } from "./api/TodoApiService"
import { useAuth } from "./AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent() {

    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    const navigate = useNavigate()

    const username = authContext.username

    useEffect (
        () => refreshTodos(), []
    )

    function updateTodo(id) {
        console.log(id)
        navigate(`/todo/${id}`)
    }


    function deleteTodo(id) {
        console.log(id)
        deleteTodoApi(username, id)
        .then(
            () => {
                setMessage(`Delete of tod with id=${id} success`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))
    }

    function refreshTodos() {
        retrieveAllTodosForUsername(username)
            .then(res => {
                console.log(res)
                setTodos(res.data)
            }) 
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h1>Things You Want To Do!</h1> 
            {message && <div className="alert alert-warning">{message}</div> }
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>IsDone?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}