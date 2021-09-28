export interface IAppState {
    books: Books[] | [];
    favorite: FavoriteBook | [];
    isLoading?: boolean;
    snackbarMessage?: string;
}

export type Books = {
    id: number;
    averageRating: number;
    title: string;
    numberOfPages: number;
    shortSummary: string;
};

export type FavoriteBook = {
    id: number;
    bookId: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    book: { title: string; id: number };
};
