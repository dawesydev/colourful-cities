import React from "react";
import citiesData from "./citiesData.js";
import City from "./components/City";
import Issue from "./components/Issue";

export default function App() {
    const citiesArray = citiesData.data.cities;
    const cityElements = citiesArray.map(city => {
        return <City
            key={city.id}
            id={city.id}
            sectionCss={city.sectionCss}
            imgCss={city.imgCss}
            webp={city.webp}
            jpeg={city.jpeg}
            alt={city.desc}
        />

    })

    const issueElements = citiesArray.map(city =>
        <Issue
               key={city.id}
               id={city.id}
               airport={city.airport}/>
    )


    return (
            <div className="relative scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll">
                <h1 className="fixed top-4 left-6 text-5xl font-bold uppercase tracking-wide">Colourful Cities</h1>
                <div className="fixed bottom-4 left-6 w-1/3">
                    <p>
                        Colourful Cities is a project inspired by the <a href="https://lostin.com/" target="_blank" className="font-bold hover:underline hover:underline-offset-2">LOST iN </a>
                        travel guides. <i>"For people who prefer their itineraries low-key and their souvenirs intangible—unless
                        they’re of the impeccably-designed variety."</i>
                    </p>
                </div>
                <p className="fixed top-4 right-6 font-bold"><a href="#">hello@dawesy.dev</a></p>

                <div className="fixed bottom-4 right-6">
                    <ul className="flex flex-col">
                        {issueElements}
                    </ul>
                </div>

                {cityElements}

            </div>


    )
}
