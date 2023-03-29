import React, {useState} from "react";
import {Slider} from "primereact/slider";

type ChildComponentProps = {
    onRentChange: (newRent: [number, number]) => void;
};
export default function Rent({ onRentChange }: ChildComponentProps) {
    const [rent, setRent] = useState<[number, number]>([200, 4000]);


    const handleChange = (e: any) => {
        const newRent = e.value;
        setRent(newRent);
        onRentChange(newRent);
    };

    const handleClick = (e: any) => {
        const {left, width} = e.target.getBoundingClientRect();
        const newValue = e.clientX - left;
        const ratio = newValue / width;
        const range = 4000 - 100;
        const selectedValue = Math.round(100 + ratio * range);

        if (Math.abs(selectedValue - rent[0]) < Math.abs(selectedValue - rent[1])) {
            setRent([selectedValue, rent[1]]);
        } else {
            setRent([rent[0], selectedValue]);
        }
    };

    return (

        <div className="card flex flex-row justify-content-start gap-5 align-items-center pt-5 text-gray-600">
            <div className="font-semi-bold block mb-2 p-3">Loyer</div>
            <div>
                <div className="w-14rem" onClick={handleClick}>
                    <Slider
                        value={rent}
                        onChange={handleChange}
                        range
                        min={100}
                        max={2000}
                        step={20}
                    />
                </div>
                <div>
                    {`${rent[0]} CHF (min.)  - ${rent[1]}CHF (max.)`}
                </div>
            </div>
            <div className="font-semi-bold block mb-2 p-3">Charges inclus dans le loyer</div>
        </div>
    );
}
