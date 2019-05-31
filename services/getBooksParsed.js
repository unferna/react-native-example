// import { ToastAndroid } from 'react-native';
// const fetch = require('node-fetch');

const buildURL = (name_search, max_results, index) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${name_search}`;
    url += `&max_results=${max_results}`;
    // url += `&start-index=${index}`;

    return url;
};

const getBooks = (name_search, max_results, index)  => {
    return new Promise((resolve, reject) => {
        fetch(buildURL(name_search, max_results, index))
        .then(res => res.json())
        .then(books => {
            resolve(books);
        })
        // .catch(error => {
        //     ToastAndroid.show('An error has occurred!', ToastAndroid.SHORT);
        //     reject(error);
        // })
    });
};

export const getParsedBooks = (name_search, max_results, index) => {
    return new Promise((resolve, reject) => {
        getBooks(name_search, max_results, index).then(books => {
            let response = {
                total_items: books.totalItems,
                books: []
            };
    
            response.books = books.items.map(book => {
                const { title, authors, description, imageLinks } = book.volumeInfo;
                return {
                    id: book.id,
                    title: title,
                    authors: authors || ["Unknown"],
                    description: description || "Not available",
                    image_uri: imageLinks.thumbnail.replace("http://", "https://")
                }
            });

            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    }); 
};