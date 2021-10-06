import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native-paper';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/UserDetail/styles';
import * as loginActions from 'store/actions/loginActions';
import { ReducerState } from 'models/reducers/index';
import PictureViewer from 'components/PictureViewer';
const UserDetail: React.FC = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: ReducerState) => state.loginReducer.user);
    const isLoading = useSelector((state: ReducerState) => state.loadingReducer.isLoading);
    //defining states
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState<string>(userData?.firstName);
    const [lastName, setLastName] = useState<string>(userData?.lastName);
    const [email, setEmail] = useState<string>(userData?.email);
    const [isEnlarged, setIsEnlarged] = useState(false);
    const { t } = useTranslation();
    const styles = useStyles();

    const update = async () => {
        setIsEditing(!isEditing);
        editUser();
    };

    const editUser = async () => {
        if (isEditing) {
            dispatch(loginActions.updateProfileRequest({ firstName, lastName, email }));
        }
    };
    // const recallUserData = () => {
    //     dispatch(loginActions.userDetailsRequest());
    // };

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Menu>
                <MenuTrigger triggerOnLongPress={true} customStyles={triggerStyles}>
                    <Image
                        source={
                            userData?.image !== undefined
                                ? userData.image
                                : {
                                      uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                                  }
                        }
                        style={styles.displayPicture}
                    />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption
                        onSelect={() => {
                            setIsEnlarged(true);
                        }}
                        text="View"
                    />
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
                    <View style={styles.infoInputView}>
                        <Text style={styles.subHeading}>{t('First Name')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your first name"
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        />
                    </View>

                    <View style={styles.infoInputView}>
                        <Text style={styles.subHeading}>{t('Last Name')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your last name"
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />
                    </View>

                    <View style={styles.infoInputView}>
                        <Text style={styles.subHeading}>{t('Email')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your email address"
                            value={email}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            spellCheck={false}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
            )}
            <View style={styles.submitView}>
                <Button
                    onPress={() => {
                        update();
                    }}
                    disabled={isLoading}
                    style={styles.submit}>
                    <Text style={{ color: 'white' }}>{!isEditing ? t('Edit') : t('Update')}</Text>
                </Button>
                {isLoading && <ActivityIndicator color="white" style={styles.activity} />}
            </View>
            <PictureViewer
                isVisible={isEnlarged}
                imageSource={{
                    uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                }}
                onPress={() => setIsEnlarged(false)}
            />
        </KeyboardAwareScrollView>
    );
};

export default UserDetail;
const triggerStyles: object = {
    triggerWrapper: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    triggerTouchable: {
        underlayColor: 'transparent',
        activeOpacity: 70,
    },
};
