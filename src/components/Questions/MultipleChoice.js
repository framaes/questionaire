import * as React from 'react'
import { Box } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'


export default function MultipleChoice(props) {

    const answers = props.question.answers.split(",")

    return answers ? (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth value={props.answer}>
                    <h3>{props.question.question}</h3>
                    <input type='hidden' value={props.answer}></input>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.answer}
                        defaultValue={answers[0] || 'Select'}
                        onChange={(event) => props.setAnswer(event.target.value)}
                        data-question={props.question}
                    >
                        {answers.map((answer, index) => (
                            <MenuItem value={answer} key={index}>{answer}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <br/>
            
        </>
    ) : "Loading...";
}