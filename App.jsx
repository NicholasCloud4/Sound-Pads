import { useState } from "react";
import padsData from "./pads";

export default function App({ darkMode }) {
    const [pads, setPads] = useState(padsData);

    /**
     * Challenge: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
     */

    const buttonElements = pads.map((pad) => {
        return (
            <button
                style={
                    darkMode === true
                        ? { backgroundColor: "#222222" }
                        : { backgroundColor: "#cccccc" }
                }
                key={pad.id}
            ></button>
        );
    });
    return (
        <main>
            <div className="pad-container">{buttonElements}</div>
        </main>
    );
}
