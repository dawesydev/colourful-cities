import React from "react";

export default function Issue(props) {
    return (
        <li className="place-self-end">
            <a href={`#${props.id}`}
               className="text-xl font-bold italic hover:underline hover:underline-offset-2 active:text-white">{props.airport}
            </a>
        </li>
    )
}