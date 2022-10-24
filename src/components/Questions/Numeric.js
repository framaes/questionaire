import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
export default function Numeric(props) {
    return (
        <>
            <h3>{props.question}</h3>
            <Slider
                aria-label="Rate"
                defaultValue={1}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
            />
        </>
    );
}