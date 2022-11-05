import React from "react";

export default function Issue(props) {
    return (
        <li className="place-self-end">
            <a href={`#${props.id}`}
               className="font-display text-4xl hover:underline hover:underline-offset-2">{props.issue}
            </a>
        </li>
    )
}