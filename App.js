import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { BrowserRouter, BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

// import { NativeRouter, Route, Link } from "react-router-native";
import 'react-native-gesture-handler';
import Home from'./Home';
import ProductList from './ProductList';
// const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    
       
       <BrowserRouter>
 
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
              </Switch>
              <Switch>
                  {/* Route avec Hook */}
                  <Route path="/">
                    <ProductList />
                  </Route>
              </Switch>
       
      </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
