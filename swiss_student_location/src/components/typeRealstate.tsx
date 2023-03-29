import React, {useState} from "react";
import {MultiSelect, MultiSelectChangeEvent} from 'primereact/multiselect';
import {RealEstateType} from "../model/RealStateType";

interface RealstateTypesProps {
    onTypeChange: (selectedTypes: RealEstateType[] | null) => void;
}

export default function RealstateTypesRealstateTypes({ onTypeChange }: RealstateTypesProps) {
    const [type, setType] = useState<RealEstateType[] | null>(null);
    const realEstateTypes: RealEstateType[] = [
        {name: 'Studio', code: 'STU'},
        {name: 'Appartement', code: 'APP'},
        {name: 'Colocation', code: 'COL'},
        {name: 'Chambre étudiante', code: 'CHA'},
        {name: 'Maison', code: 'MAI'},
        {name: 'Villa', code: 'VIL'},
        {name: 'Terrain', code: 'TER'},
        {name: '1-bedroom', code: '1B'},
        {name: '2-bedroom', code: '2B'},
        {name: '3-bedroom', code: '3B'},
        {name: '4-bedroom', code: '4B'},
        {name: '5-bedroom', code: '5B'},

    ];

    return (
        <MultiSelect value={type}
                     onChange={(e: MultiSelectChangeEvent) => {
                         setType(e.value);
                         onTypeChange(e.value);
                     }}
                     options={realEstateTypes} display="chip" optionLabel="name"
                     placeholder="Sélectionner un type de bien immobilier" maxSelectedLabels={3}
                     className="w-full md:w-20rem text-gray-600"/>
    );
}
