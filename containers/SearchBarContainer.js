import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { 
    findBooks, 
    getSearching, 
    setLoadingStatus, 
    searchBooks 
} from '../actions';

// Components
import SearchBar from '../components/SearchBar';

class SearchBarContainer extends Component {
    searchBooks = text => {
        this.props.searchBooks(text);
    }
    
    render() {
        return (
            <SearchBar
                searching={this.props.searching}
                onHandleChangeText={this.searchBooks}
                onHandleButtonSearch={this.props.findBooks}
            />
        )
    }
}

SearchBarContainer.propTypes = {
    searching: PropTypes.bool,
};

const mapStateToProps = state => ({
    searching: getSearching(state)
});

const mapDispatchToProps = dispatch => ({
    searchBooks: text => dispatch( searchBooks(text) ),
    loadingStatus: status => dispatch( setLoadingStatus(status) ),
    findBooks: () => dispatch( findBooks() )
});

export default connect(mapStateToProps, mapDispatchToProps) (SearchBarContainer);