import images from 'config/images';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from 'screens/Signup/styles';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
const Signup: React.FC = () => {
  const dispatch = useDispatch();
  //defining states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const isLoading = useSelector(state => state.loadingReducer.isLoginLoading);
  const signupResponse = useSelector(state => {
    state.loginReducer.signUpResponse;
  });
  const [value, setValue] = useState(null);
  const signUpStatus = useSelector(state => state.loginReducer.signUpResponse);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const performSignUp = async data => {
    dispatch(loginActions.ISignupRequest(data));
    dispatch(appActions.IFetchFavoriteBooksRequest());
    dispatch(loginActions.userDetailsResponse());
    setTimeout(() => {
      dispatch(loginActions.setLoggedIn());
    }, 2000);
  };

  const onSubmit = data => {
    performSignUp(data);
  };

  const styles = useStyles();
  return (
    <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{alignItems: 'center'}}>
        <Image
          source={images.app.logo}
          style={{
            alignSelf: 'center',
            marginTop: 20,
            width: widthPercentageToDP('40%'),
            height: heightPercentageToDP('30%'),
          }}
        />
        <Text style={styles.mainHeading}>Fill in the sign up form</Text>
        <View>
          <Text style={styles.subHeading}>First Name </Text>

          <View style={styles.infoView}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter your first name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.inputField}
                  value={value}
                  onChangeText={text => onChange(text)}
                />
              )}
              name="firstName"
              defaultValue=""
            />
            {errors.firstName && <Text>First name is required.</Text>}
          </View>

          <Text style={styles.subHeading}>Last Name </Text>
          <View style={styles.infoView}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter your last name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.inputField}
                  value={value}
                  onChangeText={text => onChange(text)}
                />
              )}
              name="lastName"
              defaultValue=""
            />
            {errors.lastName && <Text>Last name is required.</Text>}
          </View>

          <Text style={styles.subHeading}>Email </Text>
          <View style={styles.infoView}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter your email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.inputField}
                  value={value}
                  onChangeText={text => onChange(text)}
                />
              )}
              name="email"
              defaultValue=""
            />
            {errors.email && <Text>Email is required.</Text>}
          </View>

          <Text style={styles.subHeading}>Password</Text>
          <View style={styles.infoView}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.inputField}
                  value={value}
                  onChangeText={text => onChange(text)}
                />
              )}
              name="password"
              defaultValue=""
            />
            {errors.lastName && <Text>Last name is required.</Text>}
          </View>
        </View>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <DropDownPicker
              placeholder="Please select gender"
              open={open}
              value={value}
              items={gender}
              setOpen={setOpen}
              setValue={onChange}
              setItems={value => console.log(value)}
              style={styles.dropDown}
              dropDownContainerStyle={styles.dropDown}
              onChangeValue={value => {}}
            />
          )}
          name="gender"
          defaultValue=""
        />
        {errors.value && <Text>Please provide gender</Text>}

        <View style={styles.editView}>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Sign up"
            style={styles.editButton}></Button>
          {isLoading && <ActivityIndicator />}
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
