import React, {useState} from "react";
import {MultiSelect, MultiSelectChangeEvent} from 'primereact/multiselect';

import {RealEstateType} from "@models/RealStateType";
import LocalDataService from "@services/LocalDataService";

/**
 *  Props of RealstateTypes
 */
interface RealstateTypesProps {
    onTypeChange: (selectedTypes: RealEstateType[] | null) => void;
}

const localData = new LocalDataService();
const realEstateTypes: RealEstateType[] = await localData.getTypes();

export default function RealEstateTypes({onTypeChange}: RealstateTypesProps) {
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
