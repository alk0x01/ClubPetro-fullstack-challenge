import axios from 'axios';

const apiRestCountries = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/all',
});

export default apiRestCountries;
