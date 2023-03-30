import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";

test('getInstitutions_nominalCase_returnsArray', async () => {
    const api = new RealStateApi();
    const institutions = await api.getInstitutions();

    expect(institutions).toBeDefined();
    expect(Array.isArray(institutions)).toBe(true);
});


test('getInstitutionByName_containsExpectedInstitution_success', async () => {
    const api = new RealStateApi();
    const institutions = await api.getInstitutions();
    const institution = institutions.find(institution => institution.name === 'CPNV');
    expect(institution).toBeDefined();
    expect(institution?.location).toBe('Sainte-Croix');
});