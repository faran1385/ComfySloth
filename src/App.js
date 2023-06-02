import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {SharedLayout} from "./pages/SharedLayout";
import {NotFound} from "./pages/NotFound";
import {About} from "./pages/About";
import {AppProvider} from "./context";
import {Products} from "./pages/Products";
import {Product} from "./pages/product"
import {Login} from "./Components/Login";
import {Signin} from "./Components/Signin";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path={"/"} element={<SharedLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"about"} element={<About/>}/>
                        <Route path={"cart"}/>
                        <Route path={"products"} element={<Products/>}/>
                        <Route path={"signin"} element={<Signin/>}/>
                        <Route path={"login"} element={<Login/>}/>
                        <Route path={"product/:productId"} element={<Product/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App
