export interface Props {
    //     books?: {};
    //     base_url?: string;
    onRefresh: () => void;
}

export interface IParams {
    id: number;
    bookId: number | string;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    book: {
        title: string;
        id: number;
    };
}
