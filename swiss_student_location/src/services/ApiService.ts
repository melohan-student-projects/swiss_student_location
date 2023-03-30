import {API_URL} from "@config/config";

/**
 * The purpose of this class is to interact with the API that contains real estate data and institutions.
 */
export default class ApiService {

    /**
     * Get all real states
     * @return Promise<any>
     */
    public async getRealEstates(): Promise<any> {
        try {
            const response = await fetch(API_URL.concat('/realestates'));
            return await response.json();
        } catch (error) {
            return [];
        }
    }

    /**
     * Get real state by id
     * @param id
     * @return Promise<any>
     */
    public async getRealEstateById(id: number): Promise<any> {
        try {
            const response = await fetch(API_URL.concat('/realestates/' + id));
            return await response.json();
        } catch (error) {
            return {};
        }
    }

    /**
     * Get real states filtered
     * @param filterRealEstates
     * @return Promise<any>
     */
    public async getRealEstatesFiltered(filterRealEstates: String) {
        try {
            const response = await fetch(API_URL.concat('/realestates/?' + filterRealEstates));
            return await response.json();
        } catch (error) {
            return {};
        }
    }


    /**
     * Get all cities
     * @return Promise<any>
     */
    public async getCities(): Promise<any> {
        try {
            const response = await fetch(API_URL.concat('/cities'));
            return await response.json();
        } catch (error) {
            return [];
        }
    }

    /**
     * Get all institutions/schools
     * @return Promise<any>
     */
    public async getInstitutions(): Promise<any> {
        try {
            const response = await fetch(API_URL.concat('/institutions'));
            return await response.json();
        } catch (error) {
            return [];
        }
    }

}