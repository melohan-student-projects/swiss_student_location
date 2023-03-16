export default class RealStateApi {
    public async getRealStates(): Promise<any> {
        return fetch(' http://localhost:3000/realestates')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}