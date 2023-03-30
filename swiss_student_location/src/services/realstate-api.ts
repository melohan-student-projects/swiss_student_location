export default class RealStateApi {
    /**
     * Get all real states
     */
    public async getRealStates(): Promise<any> {
        console.log('http://localhost:3000/realestates')
        try {
            const response = await fetch('http://localhost:3000/realestates');
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    /**
     * Get real state by id
     * @param id
     */
    public async getRealStateById(id: number): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/realestates/' + id);
            return await response.json();
        } catch (error) {
            console.error(error);
            return {};
        }
    }

    /**
     * Get real states filtered
     * @param filterRealStates
     */
    public async getRealStatesFiltered(filterRealStates: String) {
        console.log('http://localhost:3000/realestates/?' + filterRealStates)
        try {
            const response = await fetch('http://localhost:3000/realestates/?' + filterRealStates);
            return await response.json();
        } catch (error) {
            console.error(error);
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
            console.error(error);
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
            console.error(error);
            return [];
        }
    }

    /**
     * Get all criteria
     */
    public async getCriterias(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/criterias');
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    /**
     * Get all institutions
     */
    public async getInstitutions(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/institutions');
            return await response.json();
        } catch (error) {
            console.error(error);
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
            console.error(error);
            return [];
        }
    }
}