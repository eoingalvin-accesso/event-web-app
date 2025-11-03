import { Text, View, StyleSheet, Image } from 'react-native';

type FakeEventType = {
  title: string;
  imgSrc: string;
};

export const EventCmp: React.FC<FakeEventType> = ({ title, imgSrc }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imgSrc }}
        style={{ width: '100%', aspectRatio: 3 }}
      />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
