import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Actions
import { getBooks, getNotResults } from '../actions';

// Components
import Book from '../components/Book';

class ListBookContainer extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("Pase por aqui");
    }
    
    results = () => {
        if(this.props.not_results == true) {
            return <View style={styles.BooksContainer}>
                <Text>There are not results for this search!</Text>
            </View>
        
        } else {
            return <ScrollView style={styles.BooksContainer}>
                {
                    this.props.books.map(book => {
                        return <Book
                            key={book.id}
                            { ...book }
                        />
                    })
                }     
            </ScrollView>
        }
    }

    render() {
        return (
            this.results()
        );
    }
}

const styles = StyleSheet.create({
    BooksContainer: {
        marginEnd: "5%",
        marginStart: "5%",
        marginTop: "5%",
    },
    NotResults: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});

ListBookContainer.propTypes = {
    books: PropTypes.array,
};

const mapStateToProps = state => ({
    books: getBooks(state),
    not_results: getNotResults(state),
});

export default connect(mapStateToProps, null) (ListBookContainer);