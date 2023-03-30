import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';

import {Institution} from "@models/Institution";
import ApiService from "@services/ApiService";

/**
 * Props of InstitutionDropdown
 */
type InstitutionDropdownProps = {
    onInstitutionChange: (institution: Institution | null) => void;
};
const realStatesApi = new ApiService();
const institutions: Institution[] = await realStatesApi.getInstitutions()

/**
 * Dropdown of institutions
 * @param onInstitutionChange
 * @constructor
 */
export default function InstitutionDropdown({onInstitutionChange}: InstitutionDropdownProps) {
    const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);

    /**
     * Handle change of institution
     * @param e
     */
    const handleChange = (e: { value: Institution | null }): void => {
        const newInstitution = e.value as Institution;
        setSelectedInstitution(newInstitution);
        onInstitutionChange(newInstitution);
    };
    /**
     * Template of selected institution
     * @param option
     * @param props
     */
    const selectedInstitutionTemplate = (option: Institution, props: any) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const institutionOptionTemplate = (option: Institution) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center text-gray-600">
            <Dropdown value={selectedInstitution}
                      onChange={handleChange}
                      options={institutions} optionLabel="name" placeholder="Etablissement"
                      valueTemplate={selectedInstitutionTemplate} itemTemplate={institutionOptionTemplate}
                      className="w-full md:w-14rem"/>
        </div>
    )
}
