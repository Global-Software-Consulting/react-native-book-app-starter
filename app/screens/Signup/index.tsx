import images from 'config/images';
import React, {useState} from 'react';
import {Button, Image, TextInput, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Text} from 'react-native-paper';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useDispatch, useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {useStyles} from 'screens/Signup/styles';
import * as loginActions from 'store/actions/loginActions';
const Signup: React.FC = () => {
  const dispatch = useDispatch();
  //defining states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);

  const styles = useStyles();
  return (
    <View style={styles.container}>
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
                value={firstName}
                onChangeText={text => setFirstName(text)}
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
                value={lastName}
                onChangeText={text => setLastName(text)}
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
                value={email}
                onChangeText={text => setEmail(text)}
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && <Text>Email is required.</Text>}
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
            setValue={setValue}
            setItems={setGender}
            style={styles.dropDown}
            dropDownContainerStyle={styles.dropDown}
          />
        )}
        name="value"
        defaultValue=""
      />
      {errors.value && <Text>Please provide gender</Text>}

      <View style={styles.editView}>
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Sign up"
          style={styles.editButton}></Button>
      </View>
    </View>
  );
};

export default Signup;
