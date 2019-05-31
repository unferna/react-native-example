/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './store';

// Containers
import SearchBarContainer from './containers/SearchBarContainer';
import ListBookContainer from './containers/ListBookContainer';

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <View style={styles.container}>
                    <SearchBarContainer />
                
                    <ListBookContainer />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
