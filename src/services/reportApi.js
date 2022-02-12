import axios from 'axios';

axios.defaults.baseURL = `https://kapusta-api-project.herokuapp.com/api`;

export async function getReportList({ reportType, year }) {
  const { data } = await axios.get(`/report?${reportType}=${year}`);
  return data;
}
