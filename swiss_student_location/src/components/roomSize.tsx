import React, {useState} from "react";
import {InputNumber, InputNumberValueChangeEvent} from 'primereact/inputnumber';
import CantonDropdown from "@components/cantonDropdown";

export default function RoomSize() {
    const [rooms, setRooms] = useState<number | null>(1.5);

    return (
        <InputNumber inputId="roomSize" value={rooms}
                     onValueChange={(e: InputNumberValueChangeEvent) => {
                         if (e.value !== null && e.value !== undefined) {
                             setRooms(e.value);
                         }
                     }}
                     mode="decimal"
                     minFractionDigits={1} maxFractionDigits={1}/>
    );
}
