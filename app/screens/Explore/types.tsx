import { books } from 'models/reducers/appReducers';

export interface Props {
    books?: books[];
    name?: string;
    base_url?: string;
    onRefresh: () => void;
}

export interface IParams {
    id: number;
    averageRating: number;
    title: string;
    numberOfPages: number;
    shortSummary: string;
    item: { id: number };
}
