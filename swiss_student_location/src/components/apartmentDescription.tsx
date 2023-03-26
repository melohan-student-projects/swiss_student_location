import React from "react";
import {RealState} from "../model/RealState";

export function ApartmentDescription({apartment}: { apartment: RealState }) {
    return <div className="flex flex-col lg:flex-row justify-between p-3 mr-7 border-gray-200 border-t-2">
        <div className="flex flex-col pt-3">
            <h2 className="text-gray-900 text-xl font-medium title-font">Description</h2>
            <p>{apartment.rental_properties.description}</p>
        </div>
        <div className="flex flex-col p-3">
            <h2 className="text-gray-900 text-xl font-medium title-font">Information</h2>
            <p>
                <span>{apartment.advertisement.author}</span><br/>
                <span>{apartment.advertisement.contact}</span><br/>
                <span>{`${apartment.address.zip} ${apartment.address.city}`}</span><br/>
            </p>
            <div className="my-3">
                <button
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Contact
                </button>
            </div>
        </div>
    </div>;
}
  