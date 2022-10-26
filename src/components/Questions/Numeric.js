import * as React from 'react';
import { Slider } from '@mui/material';
export default function Numeric(props) {
    return (
        <>
            <h3 >{props.question}</h3>
            <input type='hidden' value={props.answer}></input>
            <Slider
                aria-label="Rate"
                defaultValue={1}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
                data-question={props.question}
                onChange={(event) => props.setAnswer(event.target.value)}
            />
        </>
    );
}