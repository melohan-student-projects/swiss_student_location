import CantonsData from "@data/cantons.json";
import CriteriaData from "@data/criteria.json"
import TypesData from "@data/types.json"

import {Canton} from "@models/Canton";
import {RealEstateCriteria} from "@models/RealEstateCriteria";
import {RealEstateType} from "@models/RealStateType";

/**
 * This class convert JSON file to the appropriate Model and returns a Model array
 */
export default class LocalDataService {

    /**
     * Get RealEstate types array from local json file
     * @return RealEstateType
     */
    public async getTypes(): Promise<RealEstateType[]> {
        try {
            const realEstateTypesJson = TypesData as any[];
            const realEstateTypes: RealEstateType[] = realEstateTypesJson.map((type) => {
                const typeObject: RealEstateType = {
                    name: type.name,
                    code: type.code,
                };
                return typeObject;
            });
            return realEstateTypes;
        } catch (error) {
            return [];
        }
    }

    /**
     * Get RealEstate Criteria array from local json file
     * @return RealEstateCriteria
     */
    public async getCriteria(): Promise<RealEstateCriteria[]> {
        try {
            const realEstateCriteriaJson = CriteriaData as any[];
            const realEstateCriteria: RealEstateCriteria[] = realEstateCriteriaJson.map((criteria) => {
                const criteriaObject: RealEstateCriteria = {
                    name: criteria.name,
                    value: criteria.value,
                };
                return criteriaObject;
            });
            return realEstateCriteria;
        } catch (error) {
            return [];
        }
    }


    /**
     * Get RealEstate Criteria array from local json file
     * @return Canton
     */
    public async getCantons(): Promise<Canton[]> {
        try {
            const cantonsJson = CantonsData as any[];
            const cantons: Canton[] = cantonsJson.map((canton) => {
                const cantonObject: Canton = {
                    code: canton.code,
                    name: canton.name,
                };
                return cantonObject;
            });
            return cantons;
        } catch (error) {
            return [];
        }
    }
}
