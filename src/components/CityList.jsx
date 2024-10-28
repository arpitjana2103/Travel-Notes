import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./helper-components/Spinner";
import Message from "./helper-components/Message";
import CityItem from "./CityItem";

function CityList() {
    const { error, isLoading, cities } = useCities();

    return (
        <>
            {isLoading && <Spinner />}

            {error && <Message message={error} type="error" />}

            {!isLoading && cities.length === 0 && (
                <Message message="Add cities by clicking on a city on the map" />
            )}

            {!isLoading && cities.length > 0 && (
                <div className={styles.cityList}>
                    {cities.map(function (city) {
                        return <CityItem city={city} key={city.id} />;
                    })}
                </div>
            )}
        </>
    );
}

export default CityList;
