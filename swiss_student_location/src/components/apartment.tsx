import {ApartmentDescription} from './apartmentDescription';
import {RealState} from "../model/RealState";
import ImageCarousel from "@components/imageCarousel";

export default function Apartment({apartment}: { apartment: RealState }) {
    return (
        <>
            <h2 className="text-gray-900 pl-5 text-2xl mb-1 bg-green-300 rounded-lg p-3 -mb-1 font-medium title-font">{apartment.rental_properties.description}</h2>
            <section
                className="flex lg:w-1/3 md:w-1/2 bg-white p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <div className="flex flex-row justify-start">
                    <ImageCarousel/>
                    <table className="table-auto">
                        <tbody>
                        <tr>
                            <th>Canton</th>
                            <td>{apartment.address.canton}</td>
                        </tr>
                        <tr>
                            <th>Adresse</th>
                            <td>{`${apartment.address.street}, ${apartment.address.zip} ${apartment.address.city}`}</td>
                        </tr>
                        <tr>
                            <th>A proximité de</th>
                            <td>{apartment.address.city}</td>
                        </tr>
                        <tr>
                            <th>Type de bien</th>
                            <td>{apartment.rental_properties.type}</td>
                        </tr>
                        <tr>
                            <th>Surface</th>
                            <td>{`${apartment.rental_properties.surface}.- (m2)`}</td>
                        </tr>
                        <tr>
                            <th>chambre</th>
                            <td>{apartment.rental_properties.rooms}</td>
                        </tr>
                        <tr>
                            <th>Loyer</th>
                            <td>{`${apartment.rental_properties.rent}.- (CHF)`}</td>
                        </tr>
                        <tr>
                            <th>Charges</th>
                            <td>{`${apartment.rental_properties.charges}.- (CHF)`}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <table className="my-4 pb-4">
                    <tbody>
                    <tr>
                        <th>Meublé</th>
                        <td>{apartment.rental_properties.furnished ? 'Oui' : 'Non'}</td>
                        <th>Baunderie</th>
                        <td>{apartment.rental_properties.flat_sharing ? 'Oui' : 'Non'}</td>
                        <th>Parking</th>
                        <td>{apartment.rental_properties.parking_available ? 'Oui' : 'Non'}</td>
                        <th>Available</th>
                        <td>{apartment.rental_properties.availability_date}</td>
                    </tr>
                    </tbody>
                </table>
                <ApartmentDescription apartment={apartment}/>
            </section>
        </>
    )
}