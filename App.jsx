import { useState } from "react";
import padsData from "./pads";
import Pads from "./pads";
import Pad from "./Pad";

export default function App() {
    const [pads, setPads] = useState(padsData);

    const buttonElements = pads.map((pad) => {
        return (

            <Pad key={pad.id} color={pad.color} on={pad.on} />
            // <button
            //     style={
            //         darkMode === true
            //             ? { backgroundColor: "#222222" }
            //             : { backgroundColor: "#cccccc" }
            //     }
            //     key={pad.id}
            // ></button>
        );
    });

    return (
        <main>
            <div className="pad-container">{buttonElements}</div>
        </main>
    );
}
