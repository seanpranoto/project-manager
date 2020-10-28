import React, { useEffect, useState } from 'react'
import axios from "axios"
import { StyledButton, Wrapper } from '../components/Styled';
import { Link } from '@reach/router';

export const Home = () => {
    const [projects, setProjects] = useState([]);

    const Styles = {
        backlog: { background: "#9fc5f8", marginRight: "23rem" },
        inProgress: { background: "#ffe599" },
        completed: { background: "#b6d7a8", marginLeft: "23rem" },
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/project/`)
            .then(res => setProjects(res.data))
            .catch(err => console.log("err: " + err))
    }, [projects]);



    return (
        <Wrapper paddingProps="1rem">
            <h3 style={Styles.backlog}>Backlog</h3>
            <h3 style={Styles.inProgress}>In Progress</h3>
            <h3 style={Styles.completed}>Completed</h3>
            {projects.map((val) => {
                if (val.status === "backlog") {
                    return (
                        <Wrapper widthProps="30%" marginProps="0.5rem" paddingProps="0.5rem">
                            <p>{val.project}</p>
                            <p>{val.dueDate}</p>
                            <p>{val.status}</p>
                            <StyledButton onClick={() => {
                                axios.put(`http://localhost:8000/api/project/${val._id}`, { project: val.project, dueDate: val.dueDate, status: "inProgress" })
                            }} widthProps="60%">Start Project  </StyledButton>
                        </Wrapper>
                    )
                }

                else if (val.status === "inProgress") {
                    return (
                        <Wrapper widthProps="30%" marginProps="0.5rem 0.5rem 0.5rem 32rem" paddingProps="0.5rem">
                            <p>{val.project}</p>
                            <p>{val.dueDate}</p>
                            <p>{val.status}</p>
                            <StyledButton onClick={() => {
                                axios.put(`http://localhost:8000/api/project/${val._id}`, { project: val.project, dueDate: val.dueDate, status: "completed" })
                            }} bgColorProps="#b6d7a8" widthProps="60%">Move to Completed</StyledButton>
                        </Wrapper>
                    )
                }

                else {
                    return (
                        <Wrapper widthProps="30%" marginProps="0.5rem 0.5rem 0.5rem 64rem" paddingProps="0.5rem">
                            <p>{val.project}</p>
                            <p>{val.dueDate}</p>
                            <p>{val.status}</p>
                            <StyledButton onClick={()=>{
                                axios.delete(`http://localhost:8000/api/project/${val._id}`)
                            }}bgColorProps="#ea9999"widthProps="60%">X          Remove Project  </StyledButton >
                        </Wrapper>
                    )
                }
            })}
            <Link to="/projects/new"><StyledButton bgColorProps="#9fc5f8" widthProps="10%" style={{display:"block"}}>Add New Project</StyledButton></Link>
        </Wrapper>
    )
}
