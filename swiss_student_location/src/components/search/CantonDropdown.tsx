import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';

import {Canton} from "@models/Canton";

type CantonDropdownProps = {
    onCantonChange: (canton: Canton | null) => void;
};

/**
 * Drop down of Canton
 * @param onCantonChange
 * @constructor
 */
export default function CantonDropdown({ onCantonChange }: CantonDropdownProps) {
    const [selectedCanton, setSelectedCanton] = useState<Canton | null>(null);
    const cantons: Canton[] = [
        {name: 'Aargau', code: 'AG'},
        {name: 'Appenzell Ausserrhoden', code: 'AR'},
        {name: 'Appenzell Innerrhoden', code: 'AI'},
        {name: 'Basel-Landschaft', code: 'BL'},
        {name: 'Basel-Stadt', code: 'BS'},
        {name: 'Bern', code: 'BE'},
        {name: 'Fribourg', code: 'FR'},
        {name: 'Geneva', code: 'GE'},
        {name: 'Glarus', code: 'GL'},
        {name: 'Graubünden', code: 'GR'},
        {name: 'Jura', code: 'JU'},
        {name: 'Lucerne', code: 'LU'},
        {name: 'Neuchâtel', code: 'NE'},
        {name: 'Nidwalden', code: 'NW'},
        {name: 'Obwalden', code: 'OW'},
        {name: 'Schaffhausen', code: 'SH'},
        {name: 'Schwyz', code: 'SZ'},
        {name: 'Solothurn', code: 'SO'},
        {name: 'St. Gallen', code: 'SG'},
        {name: 'Thurgau', code: 'TG'},
        {name: 'Ticino', code: 'TI'},
        {name: 'Uri', code: 'UR'},
        {name: 'Valais', code: 'VS'},
        {name: 'Vaud', code: 'VD'},
        {name: 'Zug', code: 'ZG'},
        {name: 'Zürich', code: 'ZH'}
    ];

    const handleChange = (e: { value: Canton | null }): void => {
        const newCanton = e.value;
        setSelectedCanton(newCanton);
        onCantonChange(newCanton);
    };


    return (
        <div className="card flex justify-content-center text-gray-600">
            <Dropdown value={selectedCanton} onChange={handleChange} options={cantons}
                      optionLabel="name"
                      editable placeholder="Canton" className="w-full md:w-14rem"/>
        </div>
    )
}