import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';
import {City} from "@models/City";
import RealStateApi from "@services/realstate-api";

type CityDropdownProps = {
    onCityChange: (city: City | null) => void;
};
const realStatesApi = new RealStateApi();
const cities: City[] = await realStatesApi.getCities();
/**
 * Drop down of cities.
 * @param onCityChange
 * @constructor
 */
export default function CityDropdown({onCityChange}: CityDropdownProps) {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);

    const selectedCityTemplate = (option: City, props: any) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name} ({option.canton}, {option.npa})</div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const handleChange = (e: { value: City | null }): void => {
        const newCity = e.value as City;
        setSelectedCity(newCity);
        onCityChange(newCity);
    };

    const cityOptionTemplate = (option: City) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name} ({option.canton}, {option.npa})</div>
            </div>
        );
    };
    return (
        <div className="card flex justify-content-center text-gray-600">
            <div className="card flex justify-content-center">
                <Dropdown value={selectedCity} onChange={handleChange}
                          options={cities} optionLabel="name" placeholder="Ville"
                          filter valueTemplate={selectedCityTemplate} itemTemplate={cityOptionTemplate}
                          className="w-full md:w-14rem"/>
            </div>
        </div>
    )
}
