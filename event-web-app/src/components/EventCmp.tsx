import { Dimensions, Image } from 'react-native';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';

type FakeEventType = {
  event: any;
};

export const EventCmp: React.FC<FakeEventType> = ({ event }) => {
  const imageUrl =
    'https://img.te2.io/unsafe/origxorig' + event?.images?.[0]?.src;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <Text style={styles.title}>{event.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    aspectRatio: 1.77,
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    alignSelf: 'center',
  },
});
