// import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { retrieveHelloBean , retrieveHelloBeanPathVariable } from "./api/HelloWorldApiService"

export default function WelcomeComponent() {

    const param = useParams()
    
    const [message, setMessage] = useState();

    function callHelloRest() {
        console.log('called')

        // axios.get('http://localhost:8080/hello-world')
        //     .then( (res) => successfulResponse(res) )
        //     .catch( (err) => errorResponse(err) )
        //     .finally( () => console.log('cleanup') )

        // retrieveHelloBean()
        //     .then( (res) => successfulResponse(res) )
        //     .catch( (err) => errorResponse(err) )
        //     .finally( () => console.log('cleanup') )

        retrieveHelloBeanPathVariable('shruti')
            .then( (res) => successfulResponse(res) )
            .catch( (err) => errorResponse(err) )
            .finally( () => console.log('cleanup') )
        
    }

    function successfulResponse(response) {
        console.log(response)
        // setMessage(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>
                Welcome { param.username }! 
            </h1>
            <div>
                {/* Your todos - <a href="/todos">goto Todos</a> */}
                Manage Your todos - <Link to="/todos">go here</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloRest}>Call rest api hello world</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

