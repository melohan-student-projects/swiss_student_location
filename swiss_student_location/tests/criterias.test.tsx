import { test } from 'vitest';
import {expect} from "vitest";
import RealStateApi from "../src/services/realstate-api";


test('getCriterias', async () => {
    const api = new RealStateApi();
    const criterias = await api.getCriterias();

    expect(criterias).toBeDefined();
    expect(Array.isArray(criterias)).toBe(true);
});

//test for the criteria name Meublé to be in the object using give when then
test('getCriteriaByName', async () => {
    const api = new RealStateApi();
    const criterias = await api.getCriterias();
    const criteria = criterias.find(criteria => criteria.name === 'Meublé');
    expect(criteria).toBeDefined();
    expect(criteria?.name).toBe('Meublé');
});
//test for the criteria name Cuisine équipées (cuisinière, réfrigérateur, etc) to be in the object using give when then
test('getCriteriaByName', async () => {
    const api = new RealStateApi();
    const criterias = await api.getCriterias();
    const criteria = criterias.find(criteria => criteria.name === 'Cuisine équipées (cuisinière, réfrigérateur, etc)');
    expect(criteria).toBeDefined();
    expect(criteria?.name).toBe('Cuisine équipées (cuisinière, réfrigérateur, etc)');
});
//test for the criteria name Salle de Bain privée to be in the object using give when then
test('getCriteriaByName', async () => {
    const api = new RealStateApi();
    const criterias = await api.getCriterias();
    const criteria = criterias.find(criteria => criteria.name === 'Salle de Bain privée');
    expect(criteria).toBeDefined();
    expect(criteria?.name).toBe('Salle de Bain privée');
});
//test for the criteria name Baundrie to be in the object using give when then
test('getCriteriaByName', async () => {
    const api = new RealStateApi();
    const criterias = await api.getCriterias();
    const criteria = criterias.find(criteria => criteria.name === 'Baundrie');
    expect(criteria).toBeDefined();
    expect(criteria?.name).toBe('Baundrie');
});
//test for the criteria name Internet à haut débit to be in the object using give when then
test('getCriteriaByName', async () => {
    const api = new RealStateApi();
    const criterias = await api.getCriterias();
    const criteria = criterias.find(criteria => criteria.name === 'Internet à haut débit');
    expect(criteria).toBeDefined();
    expect(criteria?.name).toBe('Internet à haut débit');
});
