import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {SharedLayout} from "./pages/SharedLayout";
import {NotFound} from "./pages/NotFound";
import {AppProvider} from "./context";
function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path={"/"} element={<SharedLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"about"}/>
                        <Route path={"cart"}/>
                        <Route path={"products"}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App
