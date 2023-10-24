import axios from 'axios';

const BASE_URL = 'https://asg-05559-d-01-request.azuremicroservices.io/v1';


export const getData = async () => {
  const result = await axios.get(`${BASE_URL}/requests`)
  return result;
}
