import Body from '../pages/Body'
import AddNewNote from '../components/AddNewNote'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Options from '../components/Options';
import NoteDetails from '../components/NoteDetails';
const HomeStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    options={{
                        header: () => <Options text={'Notes'} />
                    }}
                    component={Body}
                />
                <Stack.Screen
                    name="AddNote"
                    component={AddNewNote}
                    options={{
                        header: ({ navigation }) => <Options text={'Add New Note'} navigation={navigation} />
                    }}
                />
                <Stack.Screen
                    name="NoteDetails"
                    component={NoteDetails}
                    options={{
                        header: ({ navigation }) => <Options text={'Note'} navigation={navigation} />
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack