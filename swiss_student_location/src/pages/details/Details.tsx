import {useEffect, useState} from "react";
import {RealEstate} from "@models/RealEstate";

import ApiService from "@services/ApiService";
import Apartment from "@pages/details/Apartment";
import '@assets/style/detail.css'

/**
 * This is the search page of a RealEstate
 * @constructor
 */
export default function Details() {

    const [apartment, setApartment] = useState<RealEstate | null>(null);
    const [id, setId] = useState<number>(0);

    // Allow to navigate between realestate by url
    const url = window.location.href.split("/").pop();
    if (url !== id.toString() && url !== "" && !isNaN(parseInt(url!))) {
        setId(parseInt(url!));
    }

    /**
     * Get the realstate by id
     */
    useEffect(() => {
        if (id < 0) return;
        const realStatesApi = new ApiService();
        realStatesApi.getRealEstateById(id).then((realStates: RealEstate) => {
            setApartment(realStates);
        });
    }, [id]);

    return (
        <div className="mx-8">
            <h2 className="text-gray-900 text-4xl mb-1 pb-3 font-medium title-font">Détails</h2>
            {apartment &&
                <Apartment apartment={apartment}/>
            }
        </div>
    )

}