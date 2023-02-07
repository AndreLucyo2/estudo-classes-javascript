const { faker } = require('@faker-js/faker');
import { Brand } from "../models/Brand.js";

/** Returns a Brand with all props required to make a POST request.*/
export function makeAFakeBrand(shopcode) {

    let brand = new Brand();
    brand.uid = (faker.datatype.uuid()).toUpperCase();
    brand.shopcode = shopcode;
    brand.name = faker.random.word() + "-" + faker.datatype.number({ min: 100, max: 999 });
    brand.id = faker.datatype.number({ min: 100000, max: 999999 }).toString();

    return brand;
}