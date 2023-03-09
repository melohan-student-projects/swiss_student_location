export interface RealState {
    id: number;
    advertisement: {
        contact: string;
        ad_date: string;
        real_estate_date: string;
        author: string;
    };
    address: {
        canton: string;
        zip: string;
        city: string;
        street: string;
        postcode: string;
    };
    coordinates: {
        longitude: string;
        latitude: string;
    };
    rental_properties: {
        status: string;
        availability_date: string;
        type: string;
        description: string;
        surface: number;
        rooms: number;
        furnished: boolean;
        rent: number;
        charges: number;
        flat_sharing: boolean;
        parking_available: boolean;
        parking_rent: number;
    };
    photos: string[] | string;
}
