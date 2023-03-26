import React, {useState} from 'react';
import {Checkbox} from 'primereact/checkbox';

export default function OfferChecklist() {
    const offerList = [
        "Meublé",
        "Cuisine équipées (cuisinière, réfrigérateur, etc)",
        "Salle de Bain privée",
        "Baundrie",
        "Internet à haut débit",
        "Proximité des commerces et services",
        "Balcon / terasse",
        "Cave à disposition",
        "Place de parking",
        "Climatisation",
        "Animaux de compagnie accepté",
        "Accessibilité (pour personne à mobilité réduite)"
    ];

    const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

    const onOfferChange = (e: { checked: boolean; value: string }) => {
        let updatedOffers = [...selectedOffers];

        if (e.checked) {
            updatedOffers.push(e.value);
        } else {
            updatedOffers = updatedOffers.filter(offer => offer !== e.value);
        }

        setSelectedOffers(updatedOffers);
    };
    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3">
                {offerList.map((offer, index) => (
                    <div key={index} className="flex align-items-center w-1/3">
                        <Checkbox
                            inputId={`offer-${index}`}
                            name="offer"
                            value={offer}
                            onChange={onOfferChange}
                            checked={selectedOffers.includes(offer)}
                        />
                        <label htmlFor={`offer-${index}`} className="ml-2">{offer}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};
