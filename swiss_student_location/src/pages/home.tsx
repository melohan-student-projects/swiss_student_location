import RealStateApi from "../service/realstate-api";
import {RealState} from "../model/RealState";
import {useEffect, useState} from "react";
import Realstate from "@components/realstate";

export default function Home() {
    const [realStates, setRealStates] = useState<RealState[]>([]);

    useEffect(() => {
        const realStatesApi =  new RealStateApi();
        realStatesApi.getRealStates().then((realStates: RealState[]) => {
            setRealStates(realStates);
        });
    }, []);

    return (
        <div>
            <h1>Bienvenue sur Swiss Student Location !</h1>
            <section className="text-gray-600 body-font">
                    <Realstate realState={realStates}/>
            </section>
        </div>
    );
};