import { Books } from 'models/reducers/appReducers';
import { ReactNodeArray } from 'react';

export interface Props {
    books?: Array<Books>;
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
