import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import DateHead from '../../widgets/DateHead/ui';
import TodoList from '../../widgets/TodoList/ui';
import AddTodo from '../../widgets/AddTodo/ui';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ios: 'padding', android: 'height'})}
        style={styles.avoid}>
        <DateHead />
        <TodoList />
        <AddTodo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default Home;
