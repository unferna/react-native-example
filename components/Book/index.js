import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Image,
    Text,
    View
} from 'react-native';

// Styles 
import { styles } from './styles';

class Book extends Component {
    render() {
        return (
            <View style={styles.BookItem}>
                <View style={styles.ImageContainer}>
                    <Image
                        style={styles.Portrait}
                        source={{ uri: this.props.image_uri, static: true }}
                    />
                </View>

                <View style={styles.InfoContainer}>
                    <Text style={styles.Title}>{ this.props.title }</Text>
                    
                    <Text style={styles.Labels}>Authors: </Text>
                    <Text>{ this.props.authors.join(', ') }</Text>

                    <Text style={styles.Labels}>Description:</Text>
                    <Text>{ this.props.description }</Text>
                </View>
            </View>    
        )
    }
}

Book.propTypes = {
    image_uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired
};

export default Book;