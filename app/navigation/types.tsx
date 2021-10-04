import { Props as ExploreProps } from 'screens/Explore/types';
import { Props as FavoriteProps } from 'screens/Favorite/types';
import { ILoginData as LoginProps } from 'screens/Login/types';
import { ISignupData as SignupProps } from 'screens/Signup/types';

export interface AuthNavigatorProps {
    Login: LoginProps;
    Signup: SignupProps;
}

export interface TabNavigatorProps {
    Explore: ExploreProps;
    Favorite: FavoriteProps;
}

export type RootStackProps = {
    Home: TabNavigatorProps;
    Auth: AuthNavigatorProps;
};
