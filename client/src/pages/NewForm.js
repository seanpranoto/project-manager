import React, { useState } from 'react';
import { Link, navigate } from "@reach/router";
import { StyledButton, Wrapper } from "../components/Styled";
import axios from "axios";
import { withTheme } from 'styled-components';

export const NewForm = () => {
    const [project, setProject] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status] = useState("backlog");
    const [message, setMessage] = useState([]);

    const msgArr=[];

    if(project.length<3){
        msgArr.push( "Project must be at least 3 charaters long")
    }
    if(dueDate.length<1){
        msgArr.push( "Due Date is required")
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/project`, { project, dueDate, status })
            .then(() => navigate("/"))
            .catch(err => {
                const error = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(error)) {
                    errArr.push(error[key].message);
                }
                setMessage(errArr);
            });
    }

    return (
        <>
            <Link to="/">Back to Dashboard</Link>
            <h4 style={{background:"white", zIndex:"999", position:"absolute", top:"4.3rem", left:"25rem"}}>Plan a new project</h4>
            <Wrapper widthProps="50%" paddingProps="1rem" marginProps="1rem auto">
                {msgArr.map((msg, i)=><p key={i}>{msg}</p>)}
                {message.map((msg, i) => <p key={i}>{msg}</p>)}
                <form onSubmit={onSubmit}>
                    <p>
                        <label htmlFor="project">Project: </label>
                        <input type="text" name="project" onChange={e => setProject(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="date">Due Date:</label>
                        <input type="date" name="date" onChange={e => setDueDate(e.target.value)} />
                    </p>
                    <StyledButton bgColorProps="#9fc5f8" widthProps="90%" paddingProps="0.2rem">Plan Project</StyledButton>
                </form>
            </Wrapper>
        </>
    )
}
