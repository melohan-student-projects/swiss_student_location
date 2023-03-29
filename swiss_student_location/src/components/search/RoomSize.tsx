import React, {useState} from "react";
import {InputNumber, InputNumberValueChangeEvent} from 'primereact/inputnumber';

type RoomSizeProps = {
    onRoomSizeChange: (rooms: number | null) => void;
};
export default function RoomSize({ onRoomSizeChange }: RoomSizeProps) {
    const [rooms, setRooms] = useState<number | null>(1.5);

    const handleChange = (e: InputNumberValueChangeEvent): void => {
        if (e.value !== null && e.value !== undefined) {
            setRooms(e.value);
            onRoomSizeChange(e.value);
        }
    };

    return (
        <InputNumber inputId="roomSize" value={rooms}
                     onValueChange={handleChange}
                     mode="decimal"
                     minFractionDigits={1} maxFractionDigits={1}/>
    );
}
