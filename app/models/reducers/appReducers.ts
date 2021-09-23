export interface IAppState {
    books: books[];
    favorite: favoriteBook;
    isLoading: boolean;
    snackbarMessage:string
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