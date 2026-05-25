import type { NextPage } from "next";
import React, { useState, useEffect } from "react";

const PageComponentWeather = () => {
    interface WeatherProps {
        weather: string;
    }

    const WeatherComponent = (props: WeatherProps) => {
        const [count, setCount] = useState(0);
        // This runs on every render, but because the deps are [],
        // it sees nothing needing changing on subsequent re-renders
        // Effects run *AFTER* React commits the render to the DOM,
        // so on pageload count is rendered as 0 for a moment
        useEffect(() => {
            setCount(1);
        }, []);

        return (
            <h1 onClick={() => setCount(count + 1)}>
                The weather is {props.weather},
                and the counter shows {count}
            </h1>
        );
    };

    return (<WeatherComponent weather="sunny"/>);
}

export default PageComponentWeather;