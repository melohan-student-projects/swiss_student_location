import { test } from 'vitest';
import {expect} from "vitest";
import LocalDataService from "@services/LocalDataService";


test('getTypes_nominalCase_returnsArray', async () => {
    // given
    const localData = new LocalDataService();

    // when
    const types = await localData.getTypes();

    // then
    expect(types).toBeDefined();
    expect(Array.isArray(types)).toBe(true);
});

test('getTypes_containsExpectedData_success', async () => {
    // given
    const localData = new LocalDataService();

    // when
    const types = await localData.getTypes();
    const type1 = types.find(type => type.name === 'Appartement');
    const type2 = types.find(type => type.name === 'Studio');
    const type3 = types.find(type => type.name === 'Villa');

    // then
    expect(type1?.name).toBe('Appartement');
    expect(type2?.name).toBe('Studio');
    expect(type3?.name).toBe('Villa');
});
