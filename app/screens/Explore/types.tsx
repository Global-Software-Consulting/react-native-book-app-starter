import { IAppState } from 'models/reducers/appReducers';

export interface Props {
    books?: IAppState;
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
}
