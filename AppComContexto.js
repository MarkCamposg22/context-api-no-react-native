import { useContext } from 'react';
import { Text, View } from 'react-native';

import { UserContext } from './UserContext';

// App.jsx
export default function App() {
    return (
        <View>
            <Navbar />
            <Dashboard />
        </View>
    );
}

// Navbar.jsx
function Navbar() {
    return (
        <View>
            <UserProfile />
        </View>
    )
}

// Dashboard.jsx
function Dashboard() {
    return (
        <View>
            <Settings />
        </View>
    );
}

// UserProfile.jsx
function UserProfile() {
    const { user } = useContext(UserContext);

    return (
        <View>
            <Text>Olá {user.name}</Text>
        </View>
    )
}

// Settings.jsx
function Settings() {
    const { user } = useContext(UserContext);

    return (
        <View>
            <Text>Name: {user.name}</Text>
            <Text>E-mail: {user.email}</Text>
        </View>
    );
}
