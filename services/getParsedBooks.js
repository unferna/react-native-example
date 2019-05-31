import { ToastAndroid } from 'react-native';

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
        .catch(error => {
            ToastAndroid.show('An error has occurred!', ToastAndroid.SHORT);
            reject(error);
        })
    });
};

export const getParsedBooks = (name_search, max_results, index) => {
    return new Promise((resolve, reject) => {
        getBooks(name_search, max_results, index).then(books => {
            if(books.totalItems > 0) {
                let response = {
                    total_items: books.totalItems,
                    books: []
                };
        
                response.books = books.items.map(book => {
                    const { title, authors, description, imageLinks } = book.volumeInfo;
                    let image_uri = "http://files.soprema.ca//2017-05-29/not-available.png592c45a064e27684943ac22e5642b6c8c461033007ad0.png";
    
                    if(imageLinks) {
                        image_uri = imageLinks.thumbnail && imageLinks.thumbnail.replace("http://", "https://");
                    }
    
                    return {
                        id: book.id,
                        title: title,
                        authors: authors || ["Unknown"],
                        description: description || "Not available",
                        image_uri
                    }
                });
    
                resolve(response.books);
            } else {
                resolve([]);
            }
        })
        .catch(error => {
            reject(error);
        });
    }); 
};