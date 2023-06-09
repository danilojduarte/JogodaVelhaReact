import React from "react";
import Input from "../input";
import Label from "../Label";
import './styles.css';

const Checkbox = ({id = "", value = "", content = ""}) => (
    <>
        <Input id={id} value={value} type="checkbox" content={content} />
        <Label htmlFor={id} content={content} />
    </>
);

export default Checkbox;