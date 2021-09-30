export interface Props {
    books: {
        id: number;
        numberOfPages: string | number;
        createdAt: string;
        title: string;
        shortSummary: string;
    };
    base_url: string;
}
export interface Books {
    id: number;
    numberOfPages: string | number;
    createdAt?: string;
    title: string;
    shortSummary: string;
}
export interface RouteState {
    route: {
        params: string;
    };
}
