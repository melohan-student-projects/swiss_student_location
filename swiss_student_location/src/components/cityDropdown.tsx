import React, {useState} from "react";
import {Dropdown, DropdownChangeParams} from 'primereact/dropdown';
import {City} from "../model/City";


export default function CityDropdown() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        {name: 'Lausanne', canton: 'Vaud', npa: 1000},
        {name: 'Montreux', canton: 'Vaud', npa: 1820},
        {name: 'Vevey', canton: 'Vaud', npa: 1800},
        {name: 'Yverdon-les-Bains', canton: 'Vaud', npa: 1400},
        {name: 'Ste-Croix', canton: 'Vaud', npa: 1420},
        {name: 'Sion', canton: 'Valais', npa: 1950},
        {name: 'Martigny', canton: 'Valais', npa: 1920},
        {name: 'Monthey', canton: 'Valais', npa: 1870},
        {name: 'Geneva', canton: 'Geneva', npa: 1200},
        {name: 'Vernier', canton: 'Geneva', npa: 1214},
        {name: 'Neuchâtel', canton: 'Neuchâtel', npa: 2000},
        {name: 'La Chaux-de-Fonds', canton: 'Neuchâtel', npa: 2300},
        {name: 'Fribourg', canton: 'Fribourg', npa: 1700},
        {name: 'Biel/Bienne', canton: 'Bern', npa: 2500},
        {name: 'Bern', canton: 'Bern', npa: 3000},
        {name: 'Zurich', canton: 'Zurich', npa: 8000},
        {name: 'Winterthur', canton: 'Zurich', npa: 8400},
        {name: 'St. Gallen', canton: 'St. Gallen', npa: 9000},
        {name: 'Chur', canton: 'Grisons', npa: 7000},
        {name: 'Sankt Moritz', canton: 'Grisons', npa: 7500},
        {name: 'Lugano', canton: 'Ticino', npa: 6900},
        {name: 'Bellinzona', canton: 'Ticino', npa: 6500},
        {name: 'Locarno', canton: 'Ticino', npa: 6600},
    ];

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
    const cityOptionTemplate = (option: City) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name} ({option.canton}, {option.npa})</div>
            </div>
        );
    };
    return (
        <div className="card flex justify-content-center">
            <div className="card flex justify-content-center">
                <Dropdown value={selectedCity} onChange={(e: DropdownChangeParams) => setSelectedCity(e.value as City)}
                          options={cities} optionLabel="name" placeholder="Select a City"
                          filter valueTemplate={selectedCityTemplate} itemTemplate={cityOptionTemplate}
                          className="w-full md:w-14rem"/>
            </div>
        </div>
    )
}
