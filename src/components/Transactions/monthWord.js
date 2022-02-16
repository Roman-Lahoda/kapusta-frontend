export default function monthWord(key) {
  let month = '';
  switch (key) {
    case '1':
      month = 'январь';
      break;
    case '2':
      month = 'февраль';
      break;
    case '3':
      month = 'март';
      break;
    case '4':
      month = 'апрель';
      break;
    case '5':
      month = 'май';
      break;
    case '6':
      month = 'июнь';
      break;
    case '7':
      month = 'июль';
      break;
    case '8':
      month = 'август';
      break;
    case '9':
      month = 'сентябрь';
      break;
    case '10':
      month = 'октябрь';
      break;
    case '11':
      month = 'ноябрь';
      break;
    case '12':
      month = 'декабрь';
      break;
    default:
      month = '';
  }
  return month;
}
