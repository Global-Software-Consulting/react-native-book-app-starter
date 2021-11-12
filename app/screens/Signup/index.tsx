import { IAppState } from 'models/reducers/appReducers'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Text } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Toast from 'react-native-simple-toast'
import { useDispatch, useSelector } from 'react-redux'
import * as snackbarActions from 'store/actions/snackbarActions'
import { useStyles } from 'screens/Signup/styles'
import * as loginActions from 'store/actions/loginActions'
import { ISignupData } from './types'

const Signup: React.FC = () => {
    const dispatch = useDispatch()
    //defining states
    const [open, setOpen] = useState<boolean>(false)
    const { t } = useTranslation()
    const isLoading = useSelector(
        (state: { loadingReducer: IAppState }) => state.loadingReducer.isLoading
    )
    const [testGenderState, setTestGenderState] = useState('')
    const gender = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ]
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const validate = (text: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        return reg.test(text)
    }

    const performSignUp = async (data: ISignupData) => {
        if (validate(data.email)) {
            dispatch(loginActions.signupRequest(data))
        } else {
            dispatch(snackbarActions('Incorrect email format'))
        }
    }

    const onSubmit = (data: ISignupData) => {
        performSignUp(data)
    }

    const styles = useStyles()

    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#00416A', '#00416A', '#E4E5E6']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.1, y: 3.0 }}
                locations={[0, 0.5, 0.6]}
                style={styles.linearGradient}
            />
            <View style={styles.cardView}>
                <Text style={styles.signUpText}>{t('Sign up')}</Text>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            testID={'firstname'}
                            placeholder={t('Enter your first name')}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputField}
                            value={value}
                            onChangeText={(text) => onChange(text)}
                        />
                    )}
                    name="firstName"
                    defaultValue=""
                />
                {errors.firstName && (
                    <Text style={{ color: 'red' }}>{t('First name is required')}</Text>
                )}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            testID={'lastname'}
                            placeholder={t('Enter your last name')}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputField}
                            value={value}
                            onChangeText={(text) => onChange(text)}
                        />
                    )}
                    name="lastName"
                    defaultValue=""
                />
                {errors.lastName && (
                    <Text style={{ color: 'red' }}>{t('Last name is required')}</Text>
                )}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            testID={'email'}
                            placeholder={t('Enter your email')}
                            autoCapitalize="none"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCorrect={false}
                            style={styles.inputField}
                            value={value}
                            onChangeText={(text) => onChange(text)}
                        />
                    )}
                    name="email"
                    defaultValue=""
                />
                {errors.email && <Text style={{ color: 'red' }}>{t('Email is required')}</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            testID={'password'}
                            placeholder={t('Enter password')}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputField}
                            value={value}
                            onChangeText={(text) => onChange(text)}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                {errors.lastName && (
                    <Text style={{ color: 'red' }}>{t('Password is required')}</Text>
                )}

                {/* <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <DropDownPicker
                            placeholder={t('Please select gender')}
                            open={open}
                            value={value}
                            items={gender}
                            setOpen={setOpen}
                            setValue={onChange}
                            style={styles.genderPicker}
                            dropDownContainerStyle={styles.dropDown}
                        />
                    )}
                    name="gender"
                    defaultValue=""
                />
                {errors.value && <Text style={{ color: 'red' }}>{t('Please provide gender')}</Text>} */}
                <View style={styles.submitView}>
                    <Button
                        testID={'submit'}
                        onPress={handleSubmit(onSubmit)}
                        disabled={isLoading}
                        style={styles.submit}>
                        <Text style={{ color: 'white' }}>{t('Sign up')}</Text>
                    </Button>
                    {isLoading && <ActivityIndicator color="white" style={styles.activity} />}
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Signup
