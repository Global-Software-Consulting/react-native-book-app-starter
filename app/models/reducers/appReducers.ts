import { Key, ReactNodeArray } from 'react';

export interface IAppState {
    books: Array<Books>;
    favorite: Array<FavoriteBook>;
    isLoading?: boolean;
    snackbarMessage?: string;
    profilePicture: string;
}

export type Books = {
    id: number ;
    averageRating: number;
    title: string;
    numberOfPages: number;
    shortSummary: string;
};

export type FavoriteBook = Pick<
    books,
    | 'book'
    | 'bookId'
    | 'averageRating'
    | 'title'
    | 'id'
    | 'length'
    | 'numberOfPages'
    | 'shortSummary'
>;

type books = {
    id: number;
    bookId: number;
    length: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    book: { title: string; id: number };
};
