import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

const initailState = {
    cities: [],
    isLoading: false,
    currentCity: null,
    error: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return { ...state, isLoading: true, error: null };

        case "cities/loaded":
            return { ...state, cities: action.payload, isLoading: false };

        case "city/loaded":
            return { ...state, currentCity: action.payload, isLoading: false };

        case "rejected":
            return { ...state, isLoading: false, error: action.payload };

        default:
            break;
    }
}

export function CitiesProvider({ children }) {
    const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
        reducer,
        initailState
    );

    useEffect(
        function () {
            async function getCities() {
                try {
                    dispatch({ type: "loading" });
                    const res = await fetch(`${BASE_URL}/cities`);
                    const data = await res.json();
                    dispatch({ type: "cities/loaded", payload: data });
                } catch (error) {
                    alert("There was an error in loading cities...");
                    dispatch({ type: "rejected", payload: error.message });
                }
            }
            getCities();
        },
        [error]
    );

    // async function getCity(id) {
    //     try {
    //         dispatch({ type: "loading" });
    //         const res = await fetch(`${BASE_URL}/cities/${id}`);
    //         const data = await res.json();
    //         dispatch({ type: "city/loaded", payload: data });
    //     } catch (error) {
    //         alert("There was an error in loading city...");
    //         dispatch({ type: "rejected", payload: error.message });
    //     }
    // }

    return (
        <CitiesContext.Provider
            value={{
                cities: cities,
                isLoading: isLoading,
                currentCity: currentCity,
                error: error,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

export function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error("Cities context was used ouside the CitiesProvider");
    return context;
}
