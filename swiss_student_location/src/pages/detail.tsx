import {useEffect, useState} from "react";
import {RealState} from "../model/RealState";
import RealStateApi from "../service/realstate-api";
import Apartment from "@components/apartment";
import '@assets/style/detail.css'

export default function Detail() {
    const [apartment, setApartment] = useState<RealState | null>(null);
    const [id, setId] = useState<number>(0);

    const url = window.location.href.split("/").pop();
    if (url !== id.toString() && url !== "" && !isNaN(parseInt(url!))) {
        setId(parseInt(url!));
    }

    useEffect(() => {
        if (id < 0) return;
        const realStatesApi = new RealStateApi();
        realStatesApi.getRealStateById(id).then((realStates: RealState) => {
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