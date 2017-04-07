const CountryList = require('country-list')();

export const countries = CountryList.getNames();

export default CountryList;