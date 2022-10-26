import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Button } from "@mui/material";
import MultipleChoice from "./Questions/MultipleChoice";
import Boolean from "./Questions/Boolean";
import Numeric from "./Questions/Numeric";
import { useLocation } from "react-router-dom";

export default function Questionaire() {
    const paperStyle1 = { padding: "20px 25px", width: 600, margin: "20px auto" };

    const paperStyle2 = { padding: "20px 25px", margin: "20px auto" };

    const location = useLocation()

    const [answer, setAnswer] = useState('')
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0)

    let currentQuestion = questions[index]
    const [answersArray] = useState([])

    useEffect(() => {
        loadQuestions();
    }, []);

    const loadQuestions = async () => {
        const result = await axios.get("http://localhost:8080/questions/")
        setQuestions(result.data);
    };
    const handleNext = () => {
        answersArray.push({ "answer": answer, "userId": location.state.id, "questionId":currentQuestion.id })
        setIndex((currentIndex) => currentIndex + 1)
        currentQuestion = questions[index]
        setAnswer('')
    };

    const handlePrevious = () => {
        answersArray.pop()
        setIndex((currentIndex) => currentIndex - 1)
        currentQuestion = questions[index]
    } 

    const clickSubmit = () => {
        answersArray.push({ "answer": answer, "userId": location.state.id })
        axios.post("http://localhost:8080/answers/submit", answersArray)
    }

    return currentQuestion ? (
        <Paper style={paperStyle1}>
            <form name="questionaire">
                <h2>Blockchain questionaire</h2>
                <Paper style={paperStyle2} key={currentQuestion.id}>
                    {currentQuestion.type === "Multiple" ? (
                        <MultipleChoice key={currentQuestion.id} question={currentQuestion} setAnswer={setAnswer} answer={answer} />
                    ) : currentQuestion.type === "Boolean" ? (
                        <Boolean key={currentQuestion.id} question={currentQuestion.question} setAnswer={setAnswer} answer={answer} />
                    ) : (
                        <Numeric key={currentQuestion.id} question={currentQuestion.question} setAnswer={setAnswer} answer={answer} />
                    )}

                    {index !== 0 && (<Button variant="contained" onClick={handlePrevious} style={{ margin: "5px" }}>
                        Previous
                    </Button>)}

                    {index !== questions.length - 1 && <Button variant="contained" onClick={handleNext} style={{ margin: "5px" }}>
                        Next
                    </Button>}

                    <br />
                </Paper>
                {questions.length === index + 1 && (<Button variant="contained" onClick={clickSubmit}>
                    Submit form
                </Button>)}
            </form>
        </Paper>
    ) : "Loading...";
}
