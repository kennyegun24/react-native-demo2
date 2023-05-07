// import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
import Body from '../pages/Body'
import AddNewNote from '../components/AddNewNote'
// import Options from '../components/Options'
// import React from 'react'

// const screens = {
//     Home: {
//         screen: Body,
//         navigationOptions: {
//             headerTitle: () =>
//                 <Options
//                     headText={'Notes'}
//                 />
//         }
//     },
//     AddNote: {
//         screen: AddNewNote,
//         navigationOptions: {
//             headerTitle: () =>
//                 <Options
//                     headText={'Add New Note'}
//                 />
//         }
//     },
// }

// const HomeStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {
//         headerTintColor: '#444',
//         headerStyle: {
//             // backgroundColor: '#111',
//             height: 60,
//         }
//     }
// })

// export default HomeStack;

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