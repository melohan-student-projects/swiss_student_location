export default class RealStateApi {
    public async getRealStates(): Promise<any> {
       try {
            const response = await fetch('http://localhost:3000/realestates');
            const responseJson = await response.json();
            return responseJson;
        }catch (error) {
            console.error(error);
            return [];
        }
       }

    public async getRealStateById(id: number): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/realestates/' + id);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
            return {};
        }
    }

}