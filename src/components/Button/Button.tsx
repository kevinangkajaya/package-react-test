import React from "react";
import "./Button.scss";
import { ErrorDiv } from "@kevinangkajaya/error-div";

export interface ButtonProps {
    label: string;
    error: string;
}

const Button = (props: ButtonProps) => {
    return (<>
        <button>{props.label}</button>
        <ErrorDiv error={props.error} />
    </>
    )
};

export default Button;