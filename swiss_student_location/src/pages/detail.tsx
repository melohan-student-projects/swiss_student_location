import {useEffect, useState} from "react";
import {RealState} from "../model/RealState";
import RealStateApi from "../service/realstate-api";
import Apartment from "@components/apartment";
import '@assets/style/detail.css'
export default function Detail() {
    const [apartment, setApartment] = useState<RealState | null >(null);

    useEffect(() => {
        const realStatesApi = new RealStateApi();
        realStatesApi.getRealStateById(1).then((realStates: RealState) => {
            setApartment(realStates);
        });
    }, []);
    return (
        <div>
            <h2 className="text-gray-900 text-4xl mb-1 pb-2 font-medium title-font">Détails</h2>
            {apartment &&
                <Apartment apartment={apartment}/>

            }


        </div>
    )

}