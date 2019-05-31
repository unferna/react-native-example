/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

// Components
import Book from './components/book';

// Services
import { getParsedBooks } from './services/getBooksParsed';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text_search: "",
            books: [],
            searching: false
        };
    }

    handleTextSearch = text => {
        this.setState({
            text_search: text,
            searching: true
        }, () => {
            this.findBooks();
        });
    }

    findBooks = () => {
        if(this.state.text_search.length) {
            getParsedBooks(this.state.text_search, 20, 0).then(books => {
                this.setState({
                    books: books.books,
                    searching: false
                });
            });
        } else {
            this.setState({
                books: [],
                searching: false
            });
        }
    }

    renderLoading() {
        return <Text>Searching...</Text>
    }

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.SearchContainer}>
                <Image 
                    style={styles.img_home}
                    source={require('./img/book_home.png')}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Search book..."
                    onChangeText={this.handleTextSearch}
                />
                { this.state.searching && this.renderLoading() }
            </View>
            
            <ScrollView style={styles.BooksContainer}>
                {
                    this.state.books.map(book => {
                        return <Book
                            key={book.id}
                            { ...book }
                        />
                    })
                }     
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    SearchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    img_home: {
        height: 120,
        width: 120
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        marginStart: "5%",
        marginEnd: "5%",
        width: "90%"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    BooksContainer: {
        marginEnd: "5%",
        marginStart: "5%",
        marginTop: "5%",
    }
});
