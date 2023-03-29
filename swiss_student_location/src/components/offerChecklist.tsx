import React, {useState} from 'react';
import {Checkbox} from 'primereact/checkbox';

interface Props {
    onSelectedOffersChange: (selectedOffers: string[]) => void;
}
export default function OfferChecklist({onSelectedOffersChange}: Props) {
    const offerList = [
        {name: "Meublé", value: "furnished"},
        {name: "Cuisine équipées (cuisinière, réfrigérateur, etc)", value: "kitchen_equipped"},
        {name: "Salle de Bain privée", value: "bathroom_private"},
        {name: "Baundrie", value: "laundry"},
        {name: "Internet à haut débit", value: "internet"},
        {name: "Balcon / terasse", value: "balcony"},
        {name: "Cave à disposition", value: "cellar"},
        {name: "Place de parking", value: "parking_available"},
        {name: "Animaux de compagnie accepté", value: "pets"},
        {name: "Accessibilité (pour personne à mobilité réduite)", value: "accessibility"}

    ]
    const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

    const onOfferChange = (e: { checked: boolean; value: string }) => {
        let updatedOffers = [...selectedOffers];

        if (e.checked) {
            updatedOffers.push(e.value);
        } else {
            updatedOffers = updatedOffers.filter(offer => offer !== e.value);
        }

        setSelectedOffers(updatedOffers);
        onSelectedOffersChange(updatedOffers);
    };
    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3">
                {offerList.map((offer, index) => (
                    <div key={index} className="flex align-items-center w-1/3">
                        <Checkbox
                            inputId={`offer-${index}`}
                            name="offer"
                            value={offer.value}
                            onChange={onOfferChange}
                            checked={selectedOffers.includes(offer.value)}
                        />
                        <label htmlFor={`offer-${index}`} className="ml-2">{offer.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};
