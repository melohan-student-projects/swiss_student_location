import {useEffect, useState} from "react";
import {Image} from 'primereact/image';

import {RealEstate} from "@models/RealEstate";
import ApiService from "@services/ApiService";

/**
 * Carousel of a details page
 * @constructor
 */
export default function ImageCarousel() {

    const [images, setImages] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);

    const url = window.location.href.split("/").pop();
    /**
     * Get real state by id
     */
    useEffect(() => {
        if (url !== "" && !isNaN(parseInt(url!))) {
            const realStatesApi = new ApiService();
            realStatesApi.getRealEstateById(parseInt(url!)).then((realState: RealEstate) => {
                setImages(realState.photos);
            });
        }
    }, [url]);

    const onImageLoad = () => {
        setVisible(true);
    }

    const onPrev = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    }

    const onNext = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    }

    const onIndicator = (index: number) => {
        setActiveIndex(index);
    }
    return (
        <>
            <div className="carousel-image-container relative w-3/6 h-3/6 mr-6">
                <Image src={images[activeIndex]} alt="apartment" className="carousel-image" onLoad={onImageLoad}
                       preview/>
                <button className="carousel-button absolute top-50 left-4" onClick={onPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="h-16 w-16 text-white stroke-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                    </svg>

                </button>
                <button className="carousel-button absolute top-50 right-4" onClick={onNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="h-16 w-16 text-white stroke-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>

                </button>
            </div>
            <div className="carousel-indicators">
                {images.map((_, i) => {
                    return (
                        <button key={i} className={`carousel-indicator ${i === activeIndex ? 'active' : ''}`}
                                onClick={() => onIndicator(i)}/>
                    );
                })}
            </div>
        </>
    );
}