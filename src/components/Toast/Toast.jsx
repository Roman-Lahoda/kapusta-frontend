import { Toaster } from 'react-hot-toast';

function Toast() {
  return (
    <Toaster
      duration="10000"
      position="top-right"
      containerStyle={{ top: 80 }}
      toastOptions={{
        duration: 5000,
        style: {
          border: '1px solid #ff751d',
          padding: '14px',
          color: '#52555f',
        },
      }}
    />
  );
}

export default Toast;
