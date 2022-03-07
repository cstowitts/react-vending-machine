import React, { useState } from "react";
import { Link } from "react-router-dom";

/** Vending machine to select snacks from
 *
 * Props:
 * - None
 *
 * State:
 * - None
 *
 * VendingMachine -> Snack
 */

function VendingMachine() {
    return (
        <div>
            <h1>Welcome to Vending Machine!</h1>
            <ul>
                <li><Link exact to="/snack/ruffles">Ruffles</Link></li>
                <li><Link exact to="/snack/hot%20cheetos%20fries">Hot Cheetos Fries</Link></li>
                <li><Link exact to="/snack/snickers">Snickers</Link></li>
                <li><Link exact to="/snack/ice%20cream">Ice Cream</Link></li>
            </ul>
        </div>
    );
}

export default VendingMachine;