import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from "./pages/Main"
import Weather from './pages/Weather';
import CalendarView from './pages/CalendarView';
import { Calendar } from 'react-native-calendars';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Weather" component={Weather} />
        <Tab.Screen name="TODOLIST" component={Main} />
        <Tab.Screen name="Calendar" component={CalendarView}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}