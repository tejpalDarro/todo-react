import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function WelcomeComponent() {
    const param = useParams()
    return (
        <div className="Welcome">
            <h1>
                Welcome { param.username }! 
            </h1>
            <div>
                {/* Your todos - <a href="/todos">goto Todos</a> */}
                Manage Your todos - <Link to="/todos">go here</Link>
            </div>
        </div>
    )
}

