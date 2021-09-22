import images from 'config/images';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoading } from 'models/reducers/loading';
import { ILoginState } from 'models/reducers/login';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Button, Image, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/UserDetail/styles';
import * as loginActions from 'store/actions/loginActions';
import NetworkUtils from 'utils/networkUtils';

//interfaces
interface IState {
    loginReducer: ILoginState;
    appReducer: IBookState;
    loadingReducer: ILoading;
}

const UserDetail: React.FC = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: IState) => state.loginReducer.user);
    const isLoading = useSelector((state: IState) => state.loadingReducer.isLoading);
    //defining states
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(userData?.firstName);
    const [lastName, setLastName] = useState(userData?.lastName);
    const [email, setEmail] = useState(userData?.email);
    const { t } = useTranslation();
    const styles = useStyles();

    const update = async () => {
        setIsEditing(!isEditing);
        editUser();
        //recallUserData();
    };

    const editUser = async () => {
        if (isEditing) {
            dispatch(loginActions.IUpdateProfileRequest({ firstName, lastName, email }));
        }
    };
    // const recallUserData = () => {
    //     dispatch(loginActions.userDetailsRequest());
    // };

    return (
        <View style={styles.container}>
            <Menu>
                <MenuTrigger>
                    <Image source={images.app.profilePicture} style={styles.displayPicture} />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => {}} text="Change" />
                    <MenuOption onSelect={() => {}}>
                        <Text style={{ color: 'red' }}>Delete</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
            <Text style={styles.mainHeading}>{t('Profile Details')}</Text>
            {!isEditing ? (
                <View>
                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('First Name')}:</Text>
                        <Text> {firstName}</Text>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('Last Name')}:</Text>
                        <Text> {lastName}</Text>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('Email')}:</Text>
                        <Text> {email}</Text>
                    </View>
                </View>
            ) : (
                <View>
                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('First Name')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        />
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('Last Name')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('Email')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            value={email}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCapitalize={false}
                            spellCheck={false}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
            )}
            <View style={styles.editView}>
                <Button
                    onPress={() => {
                        update();
                    }}
                    disabled={isLoading}
                    title={!isEditing ? t('Edit') : t('Update')}
                />
                {isLoading && <ActivityIndicator />}
            </View>
        </View>
    );
};

export default UserDetail;
