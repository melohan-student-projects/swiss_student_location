import React, {useState} from "react";
import {MultiSelect, MultiSelectChangeEvent} from 'primereact/multiselect';

import {RealEstateType} from "@models/RealStateType";
import RealStateApi from "../../services/realstate-api";

interface RealstateTypesProps {
    onTypeChange: (selectedTypes: RealEstateType[] | null) => void;
}

const realStatesApi = new RealStateApi();
const realEstateTypes: RealEstateType[] = await realStatesApi.getTypes();

export default function RealstateTypesRealstateTypes({onTypeChange}: RealstateTypesProps) {
    const [type, setType] = useState<RealEstateType[] | null>(null);

    return (
        <MultiSelect value={type}
                     onChange={(e: MultiSelectChangeEvent) => {
                         setType(e.value);
                         onTypeChange(e.value);
                     }}
                     options={realEstateTypes} display="chip" optionLabel="name"
                     placeholder="Selectionner un type de bien immobilier" maxSelectedLabels={3}
                     className="w-full md:w-20rem text-gray-600"/>
    );
}
