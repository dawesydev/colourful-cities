import React from "react";

export default function City(props) {

    return (
        <>
            <section id={props.id} className={props.sectionCss}>
                <img className={props.imgCss}
                     src={props.url}
                     alt={props.desc}/>
            </section>
        </>

    )
}