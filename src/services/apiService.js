import axios from 'axios';

const BASE_URL = 'https://asg-05559-d-01-request.azuremicroservices.io/v1';

export const submitNewRecord = async (formData) => {
  console.log(formData);
  try {
    const result = await axios.post(`${BASE_URL}/requests`, {
      "id": 0,
      "resourceId": Number(formData.resourceId),
      "type": formData.type,
      "forType": formData.forType,
      "parentId": 0,
      "children": [
        0
      ],
      "description": formData.description,
      "status": formData.status
    });
    return result;
  } catch (error) {
    console.log('error', error);
  }
}

export const getData = async () => {
  const result = await axios.get(`${BASE_URL}/requests?size=1000`)
  return result;
}

export const deleteTableRecord = async (id) => {
  return await axios.delete(`${BASE_URL}/requests?id=${id}`)
}
