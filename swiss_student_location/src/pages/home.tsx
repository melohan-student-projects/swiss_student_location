import RealStateApi from "../service/realstate-api";
import {RealState} from "../model/RealState";
import {useEffect, useState} from "react";
import Realstate from "@components/realstate";
import { Accordion, AccordionTab } from 'primereact/accordion';
import OfferChecklistForm from "@components/offerChecklistForm";

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
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
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
                    <OfferChecklistForm/>
                </AccordionTab>
            </Accordion>
            <section className="text-gray-600 body-font">
                <Realstate realState={realStates}/>
            </section>
        </div>
    );
};