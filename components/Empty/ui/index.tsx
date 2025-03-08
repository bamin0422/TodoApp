import {StyleSheet, Text, View} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>오늘 할일이 존재하지 않습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
