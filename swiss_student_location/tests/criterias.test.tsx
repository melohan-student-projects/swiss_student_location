import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";


test('getCriterias_nominalCase_success', async () => {
    // given
    const api = new RealStateApi();

    // when
    const criterias = await api.getCriterias();

    // then
    expect(criterias).toBeDefined();
    expect(Array.isArray(criterias)).toBe(true);
});

test('getCriterias_containsExpectedCriteria_success', async () => {
    // given
    const api = new RealStateApi();

    // when
    const criterias = await api.getCriterias();
    const criteria = criterias.find(criteria => criteria.name === 'Meublé');

    // then
    expect(criteria).toBeDefined();
    expect(criteria?.name).toBe('Meublé');
});
