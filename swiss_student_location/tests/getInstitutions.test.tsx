import { test } from 'vitest';
import {expect} from "vitest";
import ApiService from "../src/services/ApiService";

test('getInstitutions_nominalCase_returnsArray', async () => {
    // given
    const api = new ApiService();

    // when
    const institutions = await api.getInstitutions();

    // then
    expect(institutions).toBeDefined();
    expect(Array.isArray(institutions)).toBe(true);
});


test('getInstitutionByName_containsExpectedInstitution_success', async () => {
    // given
    const api = new ApiService();

    // when
    const institutions = await api.getInstitutions();
    const institution = institutions.find(institution => institution.name === 'CPNV');

    // then
    expect(institution).toBeDefined();
    expect(institution?.location).toBe('Sainte-Croix');
});