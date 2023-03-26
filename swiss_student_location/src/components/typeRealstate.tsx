import React, {useState} from "react";
import {MultiSelect, MultiSelectChangeEvent} from 'primereact/multiselect';
import {RealEstateType} from "../model/RealStateType";

export default function RealstateTypes() {
    const [type, setType] = useState<RealEstateType[] | null>(null);
    const realEstateTypes: RealEstateType[] = [
        {name: 'Studio', code: 'STU'},
        {name: 'Appartement', code: 'APP'},
        {name: 'Colocation', code: 'COL'},
        {name: 'Chambre étudiante', code: 'CHA'},
        {name: 'Maison', code: 'MAI'},
        {name: 'Villa', code: 'VIL'},
        {name: 'Terrain', code: 'TER'}
    ];


    return (
        <MultiSelect value={type}
                     onChange={(e: MultiSelectChangeEvent) => setType(e.value)}
                     options={realEstateTypes} display="chip" optionLabel="name"
                     placeholder="Sélectionner un type de bien immobilier" maxSelectedLabels={3}
                     className="w-full md:w-20rem"/>
    );
}
