import { test } from 'vitest';
import {expect} from "vitest";
import ApiService from "../src/services/ApiService";


test('getTypes_nominalCase_returnsArray', async () => {
    // given
    const api = new ApiService();

    // when
    const types = await api.getTypes();

    // then
    expect(types).toBeDefined();
    expect(Array.isArray(types)).toBe(true);
});

test('getTypes_containsExpectedData_success', async () => {
    // given
    const api = new ApiService();

    // when
    const types = await api.getTypes();
    const type1 = types.find(type => type.name === 'Appartement');
    const type2 = types.find(type => type.name === 'Studio');
    const type3 = types.find(type => type.name === 'Villa');

    // then
    expect(type1?.name).toBe('Appartement');
    expect(type2?.name).toBe('Studio');
    expect(type3?.name).toBe('Villa');
});
