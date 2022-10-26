import * as React from "react";
import { Radio } from "@mui/material";

export default function Boolean(props) {

    const handleChange = (event) => {
        props.setAnswer(event.target.value);
    };
    return (
        <>
            <h3 value={props.answer} data-question={props.question}>{props.question}</h3>
            <input type='hidden' value={props.answer}></input>
            <Radio
                checked={props.answer === "Yes"}
                onChange={handleChange}
                value="Yes"
                name="radio-buttons"
                inputProps={{ "aria-label": "Yes" }}
            />Yes
            <Radio
                checked={props.answer === "No"}
                onChange={handleChange}
                value="No"
                name="radio-buttons"
                inputProps={{ "aria-label": "No" }}
            />No
            <br /><br />
        </>
    );
}
