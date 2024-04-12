import { Text, View } from 'react-native';

// App.jsx
export default function App() {
    const user = { name: "Alice", email: "alice@example.com" };

    return (
        <View>
            <Navbar user={user} />
            <Dashboard user={user} />
        </View>
    );
}

// Navbar.jsx
function Navbar({ user }) {
    return (
        <View>
            <UserProfile user={user} />
        </View>
    )
}

// Dashboard.jsx
function Dashboard({ user }) {
    return (
        <View>
            <Settings user={user} />
        </View>
    );
}

// UserProfile.jsx
function UserProfile({ user }) {
    return (
        <View>
            <Text>Olá {user.name}</Text>
        </View>
    )
}

// Settings.jsx
function Settings({ user }) {
    return (
        <View>
            <Text>Name: {user.name}</Text>
            <Text>E-mail: {user.email}</Text>
        </View>
    );
}
