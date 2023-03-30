import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';

import {Institution} from "@models/Institution";
import RealStateApi from "../../services/realstate-api";
import {Criteria} from "../../models/Criteria";

type InstitutionDropdownProps = {
    onInstitutionChange: (institution: Institution | null) => void;
};
const realStatesApi = new RealStateApi();
const institutions: Institution[] = await realStatesApi.getInstitutions()

/**
 * Dropdown of institutions
 * @param onInstitutionChange
 * @constructor
 */
export default function InstitutionDropdown({onInstitutionChange}: InstitutionDropdownProps) {
    const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);

    const handleChange = (e: { value: Institution | null }): void => {
        const newInstitution = e.value as Institution;
        setSelectedInstitution(newInstitution);
        onInstitutionChange(newInstitution);
    };
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
