import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';
import {Canton} from "../model/Canton";

export default function CantonDropdown() {
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
    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCanton} onChange={(e) => setSelectedCanton(e.value)} options={cantons}
                      optionLabel="name"
                      editable placeholder="Select a Canton" className="w-full md:w-14rem"/>
        </div>
    )
}