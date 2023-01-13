import React from "react";

export default function City(props) {
    return (
        <section id={props.id} className={props.sectionCss}>

            <img src={props.jpeg} alt={props.desc} className={props.imgCss} />

            {/*<picture>*/}
            {/*    <source srcSet={props.webp} type="image/webp"  />*/}
            {/*    <img src={props.jpeg} alt={props.desc}  />*/}
            {/*</picture>*/}
        </section>
    )
}


