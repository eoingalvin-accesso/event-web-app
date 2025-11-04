import { EventCmp } from 'react-native-event-web-app';
import { perfectNorthEvents } from './example-data';

export default function App() {
  return <EventCmp event={perfectNorthEvents[0]} />;
}
