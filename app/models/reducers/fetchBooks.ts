export interface IBookState {
    snackbarVisible: boolean,
    snackbarMessage:string,
    books: books[];
    favorite: favoriteBook[];
}

export type books ={
    id: number;
    averageRating: number;
    title: string;
    numberOfPages: number;
    shortSummary: string;
}

export type favoriteBook ={
    id: number;
    bookId: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    book: { title: string; id: number };
}