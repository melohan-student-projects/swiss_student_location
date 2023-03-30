import { test } from 'vitest';
import {expect} from "vitest";
import LocalDataService from "@services/LocalDataService";


test('getCriteria_nominalCase_success', async () => {
    // given
    const localData = new LocalDataService();

    // when
    const criteria = await localData.getCriteria();

    // then
    expect(criteria).toBeDefined();
    expect(Array.isArray(criteria)).toBe(true);
});

test('getCriteria_containsExpectedCriteria_success', async () => {
    // given
    const localData = new LocalDataService();

    // when
    const criteria = await localData.getCriteria();
    const singleCriteria = criteria.find(criteria => criteria.name === 'Meublé');

    // then
    expect(singleCriteria).toBeDefined();
    expect(singleCriteria?.name).toBe('Meublé');
});
