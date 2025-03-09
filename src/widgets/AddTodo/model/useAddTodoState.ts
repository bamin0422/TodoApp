import {useState} from 'react';
import {Keyboard} from 'react-native';

const useAddTodoState = () => {
  const [text, setText] = useState<string>('');

  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  return {text, setText, onPress};
};

export default useAddTodoState;
