import axios from 'axios';

axios.defaults.baseURL = `https://kapusta-api-project.herokuapp.com/api`;

/**
 * 1. getCategories
 * 2. addCategory
 */

export async function getCategoriesList() {
  const { data } = await axios.get(`/categories`);
  return data;
}

export async function addCategory(newCategory) {
  const { data } = await axios.post(`/categories`, newCategory);
  return data;
}
