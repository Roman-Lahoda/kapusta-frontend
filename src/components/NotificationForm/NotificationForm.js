import { Notification } from 'react-pnotify';

function NotificationForm({type, title, text}) {
    return (
    // Ето УНИВЕРСАЛЬНАЯ нотификашка
    // В нотификашку передается её значение (если ошибка то !!!строка!!! 'error' если всё хорошо строка 'success') 
    // а также её заголовок и текст
    <Notification
          type={type}
          title={title}
          text={text}
          delay={2500}
          shadow={true}
          hide={true}
          nonblock={false}
          desktop={false}
        />
  );
}

export default NotificationForm;