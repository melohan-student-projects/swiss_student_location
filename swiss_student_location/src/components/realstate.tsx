import {RealState} from "../model/RealState";
import {Button} from "primereact/button";
import {Image} from 'primereact/image';

export default function Realstate({realState}: { realState: RealState[] }) {
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {realState.map((realState: RealState) => {
                    const photo = realState.photos && realState.photos.length ? realState.photos[0] : "/src/assets/images/photos/apartment1_1.jpg";
                    return <div className="p-4 md:w-1/3" key={realState.id}>
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-110 hover:border-gray-800">
                            <Image src={`${photo}`} alt="blog"
                                   className="lg:h-48 md:h-36 w-full object-cover object-center"/>
                            <div className="p-6">
                                <div className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semi-bold">{realState.rental_properties.type}</span>
                                </div>
                                <div
                                    className="text-2xl font-bold text-900">{`${realState.address.zip} ${realState.address.canton}`}</div>
                                <p className="leading-relaxed mb-3">{realState.rental_properties.description}</p>
                                <div className="flex sm:flex-row align-items-center justify-between gap-3 sm:gap-2">
                                    <span className="text-2xl font-semi-bold">${realState.rental_properties.rent}</span>
                                    <Button icon="pi pi-bookmark-fill" className="p-button-rounded"
                                            disabled={realState.rental_properties.status !== 'available'}></Button>
                                </div>
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        </div>
    );
}
  
  