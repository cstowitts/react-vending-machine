import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Snack from "./Snack.js";
import VendingMachine from "./VendingMachine.js";

/** App for viewing snacks
 *
 * Props:
 * - None
 *
 * State:
 * - None
 *
 * App -> VendingMachine -> Snack
 */
function App() {

    return (

        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/snack/:snackName">
                        <Snack />
                    </Route>
                    <Route exact path="/">
                        <VendingMachine />
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;