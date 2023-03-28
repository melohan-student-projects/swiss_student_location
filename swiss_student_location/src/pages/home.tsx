import RealStateApi from "../service/realstate-api";
import {RealState} from "../model/RealState";
import {useEffect, useState} from "react";
import Realstate from "@components/realstate";
import {Accordion, AccordionTab} from 'primereact/accordion';
import OfferChecklist from "@components/offerChecklist";
import CantonDropdown from "@components/cantonDropdown";
import CityDropdown from "@components/cityDropdown";
import InstitutionDropdown from "@components/InstitutionDropdown";
import RoomSize from "@components/roomSize";
import Rent from "@components/rent";
import RealstateTypes from "@components/typeRealstate";
import {Button} from "primereact/button";

export default function Home() {
    const [realStates, setRealStates] = useState<RealState[]>([]);
    const [rent, setRent] = useState<[number, number]>([200, 4000]);
    const [filterRealStates, setFilterRealStates] = useState<string>("");
    const realStatesApi = new RealStateApi();

    const handleRentChange = (newRent: [number, number]) => {
        setRent(newRent);
    };

    function handleSearch() {
        const [minRent, maxRent] = rent;
        if (minRent < maxRent) {
            setFilterRealStates(`rental_properties.rent_lte=${maxRent}&rental_properties.rent_gte=${minRent}`)
        }
    }

    useEffect(() => {
        if (filterRealStates) {
            realStatesApi.getRealStatesFiltered(filterRealStates).then((data) => {
                setRealStates(data);
            });
        }else{
            realStatesApi.getRealStates().then((data) => {
                setRealStates(data);
            });
        }
    }, [filterRealStates]);

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
                    <div className="flex flex-row justify-content-start gap-3">
                        <div className="text-1xl flex flex-row">
                            <h3 className="font-bold block mb-2 p-3 ">Type de bien immobilier</h3>
                            <RealstateTypes/>
                        </div>
                        <div className="text-1xl flex flex-row">
                            <h3 className="font-bold block mb-2 p-3">Taille de la chambre</h3>
                            <RoomSize/>
                        </div>
                    </div>
                    <Rent onRentChange={handleRentChange}/>
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
            <div className="card flex flex-wrap px-2 py-5 -my-5">
                <Button className="flex mx-auto mt-3 border-0 py-2.5 px-8 focus:outline-none rounded text-lg"
                        label='Chercher' icon="pi pi-check" onClick={handleSearch}>
                </Button>
            </div>

            <section className="text-gray-600 body-font">
                <Realstate realState={realStates}/>
            </section>
        </div>
    );
};