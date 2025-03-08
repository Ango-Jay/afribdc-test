import {showMessage, type MessageType} from 'react-native-flash-message';

type args = {
  type: MessageType;
  message: string;
};

export const displayToast = ({type, message}: args) => {
  showMessage({
    type,
    message,
  });
};
