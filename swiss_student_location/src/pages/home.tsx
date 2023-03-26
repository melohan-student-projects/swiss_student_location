import RealStateApi from "../service/realstate-api";
import {RealState} from "../model/RealState";
import {useEffect, useState} from "react";
import Realstate from "@components/realstate";
import {Accordion, AccordionTab} from 'primereact/accordion';
import OfferChecklist from "@components/offerChecklist";
import CantonDropdown from "@components/cantonDropdown";
import CityDropdown from "@components/cityDropdown";
import InstitutionDropdown from "@components/InstitutionDropdown";

export default function Home() {
    const [realStates, setRealStates] = useState<RealState[]>([]);

    useEffect(() => {
        const realStatesApi = new RealStateApi();
        realStatesApi.getRealStates().then((realStates: RealState[]) => {
            setRealStates(realStates);
        });
    }, []);

    return (
        <div>
            <h1>Bienvenue sur Swiss Student Location !</h1>
            <Accordion multiple activeIndex={0}>
                <AccordionTab
                    header={
                        <div className="text-gray-900 pl-5 text-2xl mb-1 rounded-lg p-3 -mb-1 font-medium title-font">
                            <span className="vertical-align-middle">Zone géographique</span>
                        </div>
                    }>
                    <div className="flex flex-wrap justify-content-center gap-3">
                        <div className="text-1xl pt-3 flex flex-row">
                            <h3 className="text-1xl p-3 ">Dans le canton de .. </h3>
                            <CantonDropdown/>
                        </div>
                        <div className="text-1xl pt-3 flex flex-row">
                            <h3 className="text-1xl p-3">Dans la ville/le village de ..</h3>
                            <CityDropdown/>
                        </div>
                        <div className="text-1xl pt-3 flex flex-row">
                            <h3 className="text-1xl p-3">Dans le quartier de .. </h3>
                            <InstitutionDropdown/>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab
                    header={
                        <div className="text-gray-900 pl-5 text-2xl mb-1 rounded-lg p-3 -mb-1 font-medium title-font">
                            <span className="vertical-align-middle">Bien immobilier</span>
                        </div>
                    }>
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab
                    header={
                        <div className="text-gray-900 pl-5 text-2xl mb-1 rounded-lg p-3 -mb-1 font-medium title-font">
                            <span className="vertical-align-middle">Critères déterminats</span>
                        </div>
                    }>
                    <OfferChecklist/>
                </AccordionTab>
            </Accordion>
            <section className="text-gray-600 body-font">
                <Realstate realState={realStates}/>
            </section>
        </div>
    );
};