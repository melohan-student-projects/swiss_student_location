export default class ApiService {

    /**
     * Get all real states
     */
    public async getRealEstates(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/realestates');
            return await response.json();
        } catch (error) {
            return [];
        }
    }

    /**
     * Get real state by id
     * @param id
     */
    public async getRealEstateById(id: number): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/realestates/' + id);
            return await response.json();
        } catch (error) {
            return {};
        }
    }

    /**
     * Get real states filtered
     * @param filterRealEstates
     */
    public async getRealEstatesFiltered(filterRealEstates: String) {
        try {
            const response = await fetch('http://localhost:3000/realestates/?' + filterRealEstates);
            return await response.json();
        } catch (error) {
            return {};
        }
    }

    /**
     * Get all cantons
     */
    public async getCantons(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/cantons');
            return await response.json();
        } catch (error) {
            return [];
        }
    }

    /**
     * Get all cities
     */
    public async getCities(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/cities');
            return await response.json();
        } catch (error) {
            return [];
        }
    }

    /**
     * Get all criteria
     */
    public async getCriteria(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/criterias');
            return await response.json();
        } catch (error) {
            return [];
        }
    }

    /**
     * Get all institutions/schools
     */
    public async getInstitutions(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/institutions');
            return await response.json();
        } catch (error) {
            return [];
        }
    }

    /**
     * Get all types
     */
    public async getTypes(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/types');
            return await response.json();
        } catch (error) {
            return [];
        }
    }
}