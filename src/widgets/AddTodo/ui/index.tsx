import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import AddWhiteIcon from '../../../../assets/icons/add_white/add_white.png';
import useAddTodoState from '../model/useAddTodoState';

const AddTodo = () => {
  const {text, setText, onPress} = useAddTodoState();

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={newText => setText(newText)}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.OS === 'ios' ? (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonStyle}>
            <Image source={AddWhiteIcon} />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.circleWrapper}>
          <TouchableNativeFeedback>
            <View style={styles.buttonStyle}>
              <Image source={AddWhiteIcon} />
            </View>
          </TouchableNativeFeedback>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
