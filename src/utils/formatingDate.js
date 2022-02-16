import moment from 'moment';

function formatDate(date) {
  return moment(date).utc().format('DD.MM.YYYY');
}

export default formatDate;
