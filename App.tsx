import React from 'react';
import LoginScreen from './src/LoginScreen';
import { View, Text, StyleSheet, Button } from 'react-native';
import { User } from '@firebase/auth-types';

import auth from './src/firebase';

const App = () => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    console.log(user?.email + ' logged out');

  };

  if (user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, {user.email}!</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    );
  } else {
    return <LoginScreen />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
