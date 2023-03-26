import RealStateApi from "../service/realstate-api";
import {RealState} from "../model/RealState";
import {useEffect, useState} from "react";
import Realstate from "@components/realstate";
import { Accordion, AccordionTab } from 'primereact/accordion';
import OfferChecklist from "@components/offerChecklist";
import CantonDropdown from "@components/cantonDropdown";

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
                    } >
                  <CantonDropdown/>
                </AccordionTab>
                <AccordionTab
                    header={
                        <div className="text-gray-900 pl-5 text-2xl mb-1 rounded-lg p-3 -mb-1 font-medium title-font">
                            <span className="vertical-align-middle">Bien immobilier</span>
                        </div>
                    }>
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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