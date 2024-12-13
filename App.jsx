import { useState } from "react";
import padsData from "./pads";
import Pads from "./pads";
import Pad from "./Pad";

export default function App() {
    const [pads, setPads] = useState(padsData);

    function toggle(id) {
        console.log("clicked!");
        /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */

        setPads((prevPads) => {
            return (
                prevPads.map((pad) => {
                    if (pad.id == id) {
                        return { ...pad, on: !pad.on }
                    } else {
                        return pad
                    }
                }
                )
            )
        })
    }

    const buttonElements = pads.map((pad) => {
        return (
            <Pad key={pad.id} color={pad.color} on={pad.on} toggle={toggle} id={pad.id} />
        );
    });

    return (
        <main>
            <div className="pad-container">{buttonElements}</div>
        </main>
    );
}
