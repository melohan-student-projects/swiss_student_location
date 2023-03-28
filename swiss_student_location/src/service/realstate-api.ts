export default class RealStateApi {
    public async getRealStates(): Promise<any> {
        console.log('http://localhost:3000/realestates')
       try {
            const response = await fetch('http://localhost:3000/realestates');
           return await response.json();
        }catch (error) {
            console.error(error);
            return [];
        }
       }

    public async getRealStateById(id: number): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/realestates/' + id);
            return await response.json();
        } catch (error) {
            console.error(error);
            return {};
        }
    }

    public async getRealStatesFiltered(filterRealStates: String) {
        console.log('http://localhost:3000/realestates/?' + filterRealStates)
        try {
            const response = await fetch('http://localhost:3000/realestates/?' + filterRealStates);
            return await response.json();
        }catch (error) {
            console.error(error);
            return {};
        }
    }
}