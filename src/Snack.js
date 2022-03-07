import React from "react";
import { Link, useParams } from "react-router-dom";

/** Snack
 *
 * Props:
 * - None
 *
 * State:
 * - None
 *
 * VendingMachine -> Snack
 */
// Can replace %20% and replace with dashes, and then split on the dashes
function Snack() {
    const params = useParams();

    return (
        <div>
            <h1>You must like {params.snackName}</h1>
            <Link exact to="/">Return home</Link>
        </div>
    );
};

export default Snack;