import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    BookItem: {
        alignItems: 'flex-start',
        flex: 2,
        flexDirection: 'row',
        marginBottom: '5%'
    },
    ImageContainer: {
        flex: 0.9,
        flexDirection: 'column',
    },
    InfoContainer: {
        flex: 1.1,
        flexDirection: 'column',
    },
    Labels: {
        fontWeight: 'bold',
        fontSize: 16
    },
    Portrait: {
        height: 200,
        width: 120,
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});