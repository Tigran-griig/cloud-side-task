import {Route} from "react-router-dom";
import './App.css';
import ProductsAll from "./components/productsAll";
function App() {
    return (
        <div className="App">
            <Route exact path={["/","home"]}>
                <ProductsAll/>
            </Route>
        </div>
    );
}

export default App;
