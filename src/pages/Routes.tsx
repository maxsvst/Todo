import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage";
import AboutPage from "./AboutPage/AboutPage";
import Layout from "./Layout";
import NoMatchPage from "./NoMatchPage";

const routes = (
    <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage/>}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />

            <Route path="*" element={<NoMatchPage />} />
        </Route>
    </Routes>
)

export default routes;