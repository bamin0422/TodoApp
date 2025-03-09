import {Image, StyleSheet, Text, View} from 'react-native';
import EmptyImage from '../../../../assets/images/young_and_happy.png';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image source={EmptyImage} style={styles.image} />
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
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
