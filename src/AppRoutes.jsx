import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { Navigate } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/app" element={<AppLayout />}>
                    <Route index element={<Navigate replace to="cities" />} />
                    <Route path="cities" element={<CityList />} />
                    <Route path="countries" element={<CountryList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
