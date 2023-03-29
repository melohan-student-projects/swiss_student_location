import React, {useState} from "react";
import {Dropdown} from 'primereact/dropdown';
import {Institution} from "../model/Institution";

type InstitutionDropdownProps = {
    onInstitutionChange: (institution: Institution | null) => void;
};
export default function InstitutionDropdown({ onInstitutionChange }: InstitutionDropdownProps) {
    const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
    const institutions: Institution[] = [
        {name: 'CPNV', location: 'Sainte-Croix'},
        {name: 'HEIG-VD', location: 'Yverdon-les-Bains'},
        {name: 'EPFL', location: 'Lausanne'},
        {name: 'ETH Zurich', location: 'Zurich'},
        {name: 'University of Basel', location: 'Basel'},
        {name: 'University of Bern', location: 'Bern'},
        {name: 'University of Geneva', location: 'Geneva'},
        {name: 'University of Lausanne', location: 'Lausanne'},
        {name: 'University of Lucerne', location: 'Lucerne'},
        {name: 'University of Neuchâtel', location: 'Neuchâtel'},
        {name: 'University of St. Gallen', location: 'St. Gallen'},
        {name: 'University of Zurich', location: 'Zurich'},
        {name: 'University of Fribourg', location: 'Fribourg'},
        {name: 'University of Lugano', location: 'Lugano'},
    ];

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
                      options={institutions} optionLabel="name" placeholder="Select an Institution"
                      valueTemplate={selectedInstitutionTemplate} itemTemplate={institutionOptionTemplate}
                      className="w-full md:w-14rem"/>
        </div>
    )
}
