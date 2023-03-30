import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';

import {Canton} from "@models/Canton";
import ApiService from "@services/ApiService";

/**
 * Props of CantonDropdown
 */
type CantonDropdownProps = {
    onCantonChange: (canton: Canton | null) => void;
};

/**
 * Get all cantons
 */
const realStatesApi = new ApiService();
const cantons: Canton[] = await realStatesApi.getCantons();

/**
 * Drop down of Canton
 * @param onCantonChange
 * @constructor
 */
export default function CantonDropdown({onCantonChange}: CantonDropdownProps) {
    const [selectedCanton, setSelectedCanton] = useState<Canton | null>(null);

    /**
     * Handle change of canton
     * @param e
     */
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