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
import {Canton} from "../model/Canton";
import {City} from "../model/City";
import {Institution} from "../model/Institution";
import {RealEstateType} from "../model/RealStateType";

export default function Home() {
    const [realStates, setRealStates] = useState<RealState[]>([]);
    const [rent, setRent] = useState<[number, number]>([200, 4000]);
    const [rooms, setRooms] = useState<number | null>(1.5);
    const [selectedCanton, setSelectedCanton] = useState<Canton | null>(null);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
    const [type, setType] = useState<RealEstateType[] | null>(null);
    const [selectedOffers, setSelectedOffers] = useState<string[]>([]);
    const [filterRealStates, setFilterRealStates] = useState<string>("");
    let filter: any = []
    const realStatesApi = new RealStateApi();

    const handleRentChange = (newRent: [number, number]) => {
        setRent(newRent);
    };
    const handleRoomSizeChange = (rooms: number | null): void => {
        setRooms(rooms);
    };
    const handleCityChange = (city: City | null): void => {
        setSelectedCity(city);
    };
    const handleCantonChange = (canton: Canton | null): void => {
        setSelectedCanton(canton);
    };
    const handleSelectedOffersChange = (selectedOffers: string[]) => {
        setSelectedOffers(selectedOffers);
    };
    const handleInstitutionChange = (institution: Institution | null): void => {
        setSelectedInstitution(institution);
    };
    const handleTypeChange = (selectedTypes: RealEstateType[] | null) => {
        setType(selectedTypes);
    }


    function handleSearch() {
        filter = []
        const [minRent, maxRent] = rent;
        if (minRent < maxRent && minRent != 200 && maxRent !=4000) filter.push(`rental_properties.rent_lte=${maxRent}&rental_properties.rent_gte=${minRent}`)
        if (rooms) filter.push(`rental_properties.rooms_gte=${rooms}`)
        if (selectedCanton) filter.push(`address.canton=${selectedCanton.name}`)
        if (selectedCity) filter.push(`address.city=${selectedCity.name}`)
        if (selectedInstitution) filter.push(`address.city=${selectedInstitution.location}`)
        if (type) {
            type.forEach((t) => {
                filter.push(`rental_properties.type=${t.name.toLowerCase()}`)
            })
        }
        if(selectedOffers.length > 0) {
            selectedOffers.forEach((o) => {
                filter.push(`rental_properties.${o}=true`)
            })
        }
        if (filter) {
            setFilterRealStates(filter.join('&'))
        }
        console.log(filter)
    }

    useEffect(() => {
        if (filterRealStates) {
            realStatesApi.getRealStatesFiltered(filterRealStates).then((data) => {
                setRealStates(data);
            });
        } else {
            realStatesApi.getRealStates().then((data) => {
                setRealStates(data);
            });
        }
    }, [filterRealStates]);

    return (
        <div className="p-4">
            <Accordion multiple activeIndex={0}>
                <AccordionTab
                    header={
                        <div className="text-gray-900 pl-5 text-2xl mb-1 rounded-lg p-3 -mb-1 font-medium title-font">
                            <span className="vertical-align-middle text-gray-900">Zone géographique</span>
                        </div>
                    }>
                    <div className="flex flex-wrap justify-content-center gap-3">
                        <div className="text-1xl pt-3 flex flex-row">
                            <h3 className="text-1xl p-3 text-gray-600">Dans le canton de .. </h3>
                            <CantonDropdown onCantonChange={handleCantonChange}/>
                        </div>
                        <div className="text-1xl pt-3 flex flex-row">
                            <h3 className="text-1xl p-3 text-gray-600">Dans la ville/le village de ..</h3>
                            <CityDropdown onCityChange={handleCityChange}/>
                        </div>
                        <div className="text-1xl pt-3 flex flex-row">
                            <h3 className="text-1xl p-3 text-gray-600">A proximité du .. .. </h3>
                            <InstitutionDropdown onInstitutionChange={handleInstitutionChange}/>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab
                    header={
                        <div className="text-gray-900 pl-5 text-2xl mb-1 rounded-lg p-3 -mb-1 font-medium title-font">
                            <span className="vertical-align-middle text-gray-900">Bien immobilier</span>
                        </div>
                    }>
                    <div className="flex flex-row justify-content-start gap-3">
                        <div className="text-1xl flex flex-row">
                            <h3 className="font-semi-bold block mb-2 p-3 text-gray-600">Type de bien immobilier</h3>
                            <RealstateTypes onTypeChange={handleTypeChange}/>
                        </div>
                        <div className="text-1xl flex flex-row">
                            <h3 className="font-semi-bold block mb-2 p-3 text-gray-600">Taille de la chambre</h3>
                            <RoomSize onRoomSizeChange={handleRoomSizeChange}/>
                        </div>
                    </div>
                    <Rent onRentChange={handleRentChange}/>
                </AccordionTab>
                <AccordionTab
                    header={
                        <div className="text-gray-900 pl-5 text-2xl mb-1 rounded-lg p-3 -mb-1 font-medium title-font">
                            <span className="vertical-align-middle text-gray-900">Critères déterminats</span>
                        </div>
                    }>
                    <OfferChecklist onSelectedOffersChange={handleSelectedOffersChange}/>
                </AccordionTab>
            </Accordion>
            <div className="card flex flex-wrap px-2 py-5 -my-5 ">
                <Button className="flex mx-auto mt-3 border-0 py-2.5 px-8 focus:outline-none bg-primaryColor rounded-lg text-lg"
                        label='Chercher' icon="pi pi-check" onClick={handleSearch}>
                </Button>
            </div>

            <section className="text-gray-600 body-font">
                <Realstate realState={realStates}/>
            </section>
        </div>
    );
};