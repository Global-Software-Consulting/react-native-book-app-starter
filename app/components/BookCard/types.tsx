import { Books } from 'screens/BookDetail/types';

export interface Props {
    id: number;
    hideIcon?: boolean;
    url?: string;
    bookTitle?: string;
    styleSelect: 'General' | 'Custom' | 'Large' | 'ExtraLarge';
    authorName?: string;
    isFavorite?: boolean;
    book?: Array<Books> | Books;
}

export interface IData {
    id?: number;
    bookId: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    book: {
        title: string;
        id: number;
    };
}
