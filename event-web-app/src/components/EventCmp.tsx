import { Text, View, StyleSheet, Image } from 'react-native';

type FakeEventType = {
  title: string;
  imgSrc: string;
  body: string;
};

export const EventCmp: React.FC<FakeEventType> = ({ title, imgSrc, body }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image
        source={{ uri: imgSrc }}
        style={{ width: '100%', aspectRatio: 3 }}
      />
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
