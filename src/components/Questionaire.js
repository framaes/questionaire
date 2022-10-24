import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Paper, Button } from '@mui/material';
import MultipleChoice from './Questions/MultipleChoice';
import Boolean from './Questions/Boolean';
import Numeric from './Questions/Numeric';

export default function Questionaire() {

    const paperStyle1 = { padding: '20px 25px', width: 600, margin: '20px auto' }

    const paperStyle2 = { padding: '20px 25px', margin: '20px auto' }

    const [questions, setQuestions] = useState([])
    useEffect(() => {
        loadQuestions()
    })

    const loadQuestions = async () => {
        const result = await axios.get("http://localhost:8080/questions/")
        setQuestions(result.data)
    }

    return (
        <Paper style={paperStyle1}>
            <h2>Blockchain questionaire</h2>
            {questions.map(question => (
                <Paper key={question.id} style={paperStyle2}>
                    {question.type === "Multiple" ? (
                        <MultipleChoice question={question} />
                    ) : question.type === "Boolean" ? (
                        <Boolean question={question.question} />
                    ) : <Numeric question={question.question} />
                    }<br />
                </Paper>
            ))}
            <Button variant="contained">Submit</Button>
        </Paper>
    );
}