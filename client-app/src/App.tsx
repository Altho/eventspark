import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";
import {Header, List} from "semantic-ui-react";

function App() {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/activities').then(response => {
            setActivities(response.data)
        })
    }, [])
    return (
        <>
            <Header as='h2' icon='users' content='EventSpark'/>
            <List>
                {activities.map((activity: any) => (
                    <List.Item key={activity.id}>{activity.title}</List.Item>
                ))}
            </List>
            <div>

            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

        </>
    )
}

export default App
