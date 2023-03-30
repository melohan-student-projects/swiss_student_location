import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";

test('getInstitutions', async () => {
    const api = new RealStateApi();
    const institutions = await api.getInstitutions();

    expect(institutions).toBeDefined();
    expect(Array.isArray(institutions)).toBe(true);
});

// test for instituation name HEIG-VD to located in Yverdon-les-Bains
test('getInstitutionByName', async () => {
    const api = new RealStateApi();
    const institutions = await api.getInstitutions();
    const institution = institutions.find(institution => institution.name === 'HEIG-VD');
    expect(institution).toBeDefined();
    expect(institution?.location).toBe('Yverdon-les-Bains');
});

// test for instituation name HEIG-VD to not located not Sainte-Croix
test('getInstitutionByName', async () => {
    const api = new RealStateApi();
    const institutions = await api.getInstitutions();
    const institution = institutions.find(institution => institution.name === 'HEIG-VD');
    expect(institution).toBeDefined();
    expect(institution?.location).not.toBe('Sainte-Croix');
});

// test for instituation CPNV name to located in Sainte-Croix
test('getInstitutionByName', async () => {
    const api = new RealStateApi();
    const institutions = await api.getInstitutions();
    const institution = institutions.find(institution => institution.name === 'CPNV');
    expect(institution).toBeDefined();
    expect(institution?.location).toBe('Sainte-Croix');
});