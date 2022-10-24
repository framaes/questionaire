import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'


export default function MultipleChoice(props) {

    const answers = props.question.answers.split(",")
    const [answer, setAnswer] = useState('')

    return answers ? (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <h3>{props.question.question}</h3>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={answer}
                    defaultValue={answers[0] || 'Select'}
                    onChange={(event) => setAnswer(event.target.value)}
                >
                    {answers.map(answer => (
                        <MenuItem value={answer} key="1">{answer}</MenuItem>
                    ))}
                </Select>
                
            </FormControl>
        </Box>
    ):"Loading...";
}