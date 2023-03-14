
import {Image} from 'primereact/image';
import RealStateApi from "../service/realstate-api";
import {RealState} from "../model/RealState";
const realStates = await RealStateApi.getRealStates();
export default function Home() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {realStates.map((realState: RealState) => {
                            const photo = realState.photos && realState.photos.length ? realState.photos[0] : "/src/assets/images/photos/apartment1_1.jpg";
                            return (
                                <div className="p-4 md:w-1/3" key={realState.id}>
                                    <div
                                        className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <Image src={ `${photo}`} alt="blog"
                                               className="lg:h-48 md:h-36 w-full object-cover object-center"/>
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{realState.rental_properties.type}</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-300 mb-3">{`${realState.address.zip} ${realState.address.canton}`}</h1>
                                            <p className="leading-relaxed mb-3">{realState.rental_properties.description}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn
                                                    More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                         strokeWidth="2" fill="none" strokeLinecap="round"
                                                         strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <span
                                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                     strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                                                    {realState.rental_properties.rent}
              </span>
                                                <span
                                                    className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                     strokeLinejoin="round" viewBox="0 0 24 24">
                  <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};