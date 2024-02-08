import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./AuthContext"
import { useEffect, useState } from "react"
import { Formik, Form, Field } from "formik"

export default function TodoComponent() {

    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos() {
        retrieveTodoApi(username, id)
        .then(res => {
            setDescription(res.data.description)
            setTargetDate(res.data.targetDate)
        })
        .catch(error => console.log(error))
    }

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={ { description, targetDate } } 
                    enableReinitialize = {true}
                    onSubmit={onSubmit}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

        </div>
    )
}