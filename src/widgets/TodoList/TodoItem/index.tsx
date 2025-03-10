import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckWhiteIcon from '../../../../assets/icons/check_white/check_white.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  id: number;
  text: string;
  done?: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({id, text, done, onToggle, onDelete}: Props) => {
  const onDeleteButtonPressed = (id: number) => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {text: '삭제', onPress: () => onDelete(id), style: 'destructive'},
      ],
      {cancelable: true, onDismiss: () => {}},
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && <Image source={CheckWhiteIcon} />}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineTrough]}>{text}</Text>
      {done && (
        <TouchableOpacity onPress={() => onDeleteButtonPressed(id)}>
          <Icon name="delete" size={24} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineTrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
