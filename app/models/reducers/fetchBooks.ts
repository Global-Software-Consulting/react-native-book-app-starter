export interface IBookState {
    isFetching: boolean;
    detail: {
        id: number;
        averageRating: number;
        title: string;
        numberOfPages: number;
        shortSummary: string;
    }[];
    favorite: {
        id: number;
        bookId: number;
        averageRating: number;
        title: string;
        numberOfPages: number;
        shortSummary: string;
        book: { title: string; id: number };
    }[];
    bookDetail: {
        id: number;
        averageRating: number;
        title: string;
        numberOfPages: number;
        shortSummary: string;
    };
}
