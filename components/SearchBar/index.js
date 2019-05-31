import React from 'react';
import PropTypes from 'prop-types';

import { Button, Image, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

const SearchBar = ({ searching, onHandleChangeText, onHandleButtonSearch }) => {
    const handleChangeText = text => {
        onHandleChangeText(text);
    };

    const handleButtonSearch = () => {
        onHandleButtonSearch();
    };

    const renderLoading = () => <Text>Searching...</Text>

    return (
        <View style={styles.SearchContainer}>
            <Image 
                style={styles.img_home}
                source={require('../../img/book_home.png')}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Search book..."
                onChangeText={handleChangeText}
            />
            <Button
                color="#841584"
                onPress={handleButtonSearch}
                title="Search"
                style={styles.ButtonSearch}
            />
            
            { searching && renderLoading() }
        </View>
    );
};

SearchBar.propTypes = {
    searching: PropTypes.bool.isRequired,
    onHandleChangeText: PropTypes.func.isRequired,
};

export default SearchBar;