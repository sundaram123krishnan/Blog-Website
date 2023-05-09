import React from "react";
import axios from "axios";


export default function Blog(props){

    return (
        <div>
            <p>{props.content}</p>
        </div>
    )

}