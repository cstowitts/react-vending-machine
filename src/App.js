import {BrowserRouter, Route, Switch} from "react-router-dom";
import Snack from "./Snack.js";
import VendingMachine from "./VendingMachine.js";

function App(){

    // const [selectedSnack, setSelectedSnack] = 

    return (

        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/:snackName">
                        <Snack />
                    </Route>
                    <Route exact path="/">
                        <VendingMachine />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    );




}