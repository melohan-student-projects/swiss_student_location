import { test } from 'vitest';
import {expect} from "vitest";
import ApiService from "../src/services/ApiService";


test('getCriteria_nominalCase_success', async () => {
    // given
    const api = new ApiService();

    // when
    const criteria = await api.getCriteria();

    // then
    expect(criteria).toBeDefined();
    expect(Array.isArray(criteria)).toBe(true);
});

test('getCriteria_containsExpectedCriteria_success', async () => {
    // given
    const api = new ApiService();

    // when
    const criteria = await api.getCriteria();
    const singleCriteria = criteria.find(criteria => criteria.name === 'Meublé');

    // then
    expect(singleCriteria).toBeDefined();
    expect(singleCriteria?.name).toBe('Meublé');
});
