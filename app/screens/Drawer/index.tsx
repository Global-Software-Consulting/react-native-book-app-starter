import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Button,
  Caption,
  Paragraph,
  Text,
  List,
  RadioButton,
  Checkbox
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeController from '../../components/ThemeController';
import {useDispatch} from 'react-redux';
import * as loginActions from 'store/actions/loginActions';
import styles from './styles';
import {useTranslation} from 'react-i18next';

import i18n from "../../components/Languages/i18n";
const initI18n = i18n;
interface IProps {
  props: IProps;
}
const Drawer: React.FC = (props) => {
  const [checked, setChecked] = React.useState('first');
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());


  return (

      <DrawerContentScrollView {...props}>
        <View
          style={
            styles.drawerContent}
        >
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
              }}
              size={50}
            />
            <Title style={styles.title}>Dawid Urbaniak</Title>
            <Caption style={styles.caption}>@trensik</Caption>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  202
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  159
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Bookmarks"
            onPress={() => {}}
          />

          <View style={styles.preference}>
            
            <Text style={styles.text}>{t('Dark Theme')} </Text>
            <ThemeController />
            
          </View>

              <List.Accordion
        title= {<Text style={styles.text}>{t('Languages')} </Text>}>
         
           <TouchableOpacity
         onPress={() => {setChecked('first'),
         i18n.changeLanguage('en')}} //Here I change the language to "en" English
          style={styles.listbutton}>
<RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('first'),
          i18n.changeLanguage('en')}}
        color="gray"
      />
          <Text style={styles.chekboxtext}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() =>{setChecked('second'), 
           i18n.changeLanguage('es')}}//Here I change the language to "es" Spanish
          style={styles.listbutton}>
        <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() =>{setChecked('second'), 
         i18n.changeLanguage('es')}}
        color="gray"
      />
          <Text style={styles.chekboxtext}>Spanish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {setChecked('third'),
          i18n.changeLanguage('de')
        }} //Here I change the language to "de" German
          style={styles.listbutton}>
            <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => {setChecked('third'),
        i18n.changeLanguage('de')
      }}
        color="gray"
      />
          <Text style={styles.chekboxtext} >German</Text>
        </TouchableOpacity>
    
      </List.Accordion>
         
            <TouchableOpacity style={styles.row}>
          <Button icon="logout" onPress={onLogout}>
        Logout
      </Button>
      </TouchableOpacity>
   
          </View>
        
      </DrawerContentScrollView>
    );
  }

export default Drawer;
