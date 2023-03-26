import React, {useState} from "react";
import {Dropdown, DropdownChangeParams} from 'primereact/dropdown';
import {Institution} from "../model/Institution";

export default function InstitutionDropdown() {
    const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
    const institutions: Institution[] = [
        {name: 'CPNV', location: 'Ste-Croix'},
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

    const selectedInstitutionTemplate = (option: Institution, props: any) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name} ({option.location})</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const institutionOptionTemplate = (option: Institution) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name} ({option.location})</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedInstitution}
                      onChange={(e: DropdownChangeParams) => setSelectedInstitution(e.value as Institution)}
                      options={institutions} optionLabel="name" placeholder="Select an Institution"
                      valueTemplate={selectedInstitutionTemplate} itemTemplate={institutionOptionTemplate}
                      className="w-full md:w-14rem"/>
        </div>
    )
}
