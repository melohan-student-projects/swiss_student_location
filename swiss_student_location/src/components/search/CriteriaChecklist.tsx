import React, {useState} from 'react';
import {Checkbox} from 'primereact/checkbox';
import RealStateApi from "../../services/realstate-api";
import {Criteria} from "../../models/Criteria";

interface Props {
    onSelectedOffersChange: (selectedOffers: string[]) => void;
}

const realStatesApi = new RealStateApi();
const criteria: Criteria[] = await realStatesApi.getCriterias()
/**
 * Checklist of criterias
 * @param onSelectedOffersChange
 * @constructor
 */
export default function CriteriaChecklist({onSelectedOffersChange}: Props) {
    const [selectedCriteria, setSelectedCriteria] = useState<string[]>([]);

    const onOfferChange = (e: { checked: boolean; value: string }) => {
        let updatedOffers = [...selectedCriteria];

        if (e.checked) {
            updatedOffers.push(e.value);
        } else {
            updatedOffers = updatedOffers.filter(offer => offer !== e.value);
        }

        setSelectedCriteria(updatedOffers);
        onSelectedOffersChange(updatedOffers);
    };

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3 text-gray-600">
                {criteria.map((offer, index) => (
                    <div key={index} className="flex align-items-center w-1/3">
                        <Checkbox
                            inputId={`offer-${index}`}
                            name="offer"
                            value={offer.value}
                            onChange={onOfferChange}
                            checked={selectedCriteria.includes(offer.value)}
                        />
                        <label htmlFor={`offer-${index}`} className="ml-2">{offer.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};
