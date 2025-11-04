import { Text, View, StyleSheet } from 'react-native';

type FakeEventType = {
  title: string;
  body: string;
};

export const EventCmp: React.FC<FakeEventType> = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: { fontSize: 40, backgroundColor: '#FF0000' },
  body: { fontSize: 24, backgroundColor: '#FFFF00' },
});
