'use strict';
let __assign =
    (this && this.__assign) ||
    function (): any {
        __assign =
            Object.assign ||
            function (t: any) {
                for (let s, i = 1, n = t.length; i < n; i++) {
                    s = t[i];
                    for (const p in s) {
                        if (Object.prototype.hasOwnProperty.call(s, p)) {
                            t[p] = s[p];
                        }
                    }
                }
                return t;
            };
        return __assign.apply(this, t);
    };
exports.__esModule = true;
import react_1 = require('react');
import react_native_1 = require('react-native');
import drawer_1 = require('@react-navigation/drawer');
import react_native_paper_1 = require('react-native-paper');
import MaterialCommunityIcons_1 = require('react-native-vector-icons/MaterialCommunityIcons');
import ThemeController_1 = require('components/ThemeController');
import react_redux_1 = require('react-redux');
import loginActions = require('store/actions/loginActions');
import styles_1 = require('screens/Drawer/styles');
import react_i18next_1 = require('react-i18next');

const Drawer = function (props: any) {
    const _a = react_1.default.useState(false),
        checked = _a[0],
        setChecked = _a[1];
    const _b = react_i18next_1.useTranslation(),
        t = _b.t,
        i18n = _b.i18n;
    const dispatch = react_redux_1.useDispatch();
    const onLogout = function () {
        return dispatch(loginActions.logOut());
    };
    return react_1.default.createElement(
        drawer_1.DrawerContentScrollView,
        __assign({}, props),
        react_1.default.createElement(
            react_native_1.View,
            { style: styles_1.default.drawerContent },
            react_1.default.createElement(
                react_native_1.View,
                { style: styles_1.default.userInfoSection },
                react_1.default.createElement(react_native_paper_1.Avatar.Image, {
                    source: {
                        uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                    },
                    size: 50,
                }),
                react_1.default.createElement(
                    react_native_paper_1.Title,
                    { style: styles_1.default.title },
                    'Dawid Urbaniak',
                ),
                react_1.default.createElement(
                    react_native_paper_1.Caption,
                    { style: styles_1.default.caption },
                    '@trensik',
                ),
                react_1.default.createElement(
                    react_native_1.View,
                    { style: styles_1.default.row },
                    react_1.default.createElement(
                        react_native_1.View,
                        { style: styles_1.default.section },
                        react_1.default.createElement(
                            react_native_paper_1.Paragraph,
                            {
                                style: [styles_1.default.paragraph, styles_1.default.caption],
                            },
                            '202',
                        ),
                        react_1.default.createElement(
                            react_native_paper_1.Caption,
                            { style: styles_1.default.caption },
                            'Following',
                        ),
                    ),
                    react_1.default.createElement(
                        react_native_1.View,
                        { style: styles_1.default.section },
                        react_1.default.createElement(
                            react_native_paper_1.Paragraph,
                            {
                                style: [styles_1.default.paragraph, styles_1.default.caption],
                            },
                            '159',
                        ),
                        react_1.default.createElement(
                            react_native_paper_1.Caption,
                            { style: styles_1.default.caption },
                            'Followers',
                        ),
                    ),
                ),
            ),
            react_1.default.createElement(drawer_1.DrawerItem, {
                icon: function (_f: any) {
                    const color = _f.color,
                        size = _f.size;
                    return react_1.default.createElement(MaterialCommunityIcons_1.default, {
                        name: 'account-outline',
                        color: color,
                        size: size,
                    });
                },
                label: 'Profile',
                onPress: function () {},
            }),
            react_1.default.createElement(drawer_1.DrawerItem, {
                icon: function (_c: any) {
                    const color = _c.color,
                        size = _c.size;
                    return react_1.default.createElement(MaterialCommunityIcons_1.default, {
                        name: 'tune',
                        color: color,
                        size: size,
                    });
                },
                label: 'Preferences',
                onPress: function () {},
            }),
            react_1.default.createElement(drawer_1.DrawerItem, {
                icon: function (_d) {
                    const color = _d.color,
                        size = _d.size;
                    return react_1.default.createElement(MaterialCommunityIcons_1.default, {
                        name: 'bookmark-outline',
                        color: color,
                        size: size,
                    });
                },
                label: 'Bookmarks',
                onPress: function () {},
            }),
            react_1.default.createElement(
                react_native_1.View,
                { style: styles_1.default.preference },
                react_1.default.createElement(
                    react_native_paper_1.Text,
                    { style: styles_1.default.text },
                    t('Dark Theme'),
                    ' ',
                ),
                react_1.default.createElement(ThemeController_1.default, null),
            ),
            react_1.default.createElement(
                react_native_paper_1.List.Accordion,
                {
                    title: react_1.default.createElement(
                        react_native_paper_1.Text,
                        { style: styles_1.default.text },
                        t('Languages'),
                        ' ',
                    ),
                },
                react_1.default.createElement(
                    react_native_1.View,
                    { style: { marginVertical: -5 } },
                    react_1.default.createElement(
                        react_native_1.TouchableOpacity,
                        {
                            onPress: function () {
                                return i18n.changeLanguage('en');
                            },
                            style: styles_1.default.button,
                        },
                        react_1.default.createElement(react_native_paper_1.Checkbox, {
                            status: checked ? 'checked' : 'unchecked',
                            status: checked ? 'checked' : 'unchecked',
                            onPress: function () {
                                setChecked(!checked);
                            },
                        }),
                        react_1.default.createElement(
                            react_native_paper_1.Text,
                            { style: styles_1.default.text },
                            'English',
                        ),
                    ),
                    react_1.default.createElement(
                        react_native_1.TouchableOpacity,
                        {
                            onPress: function () {
                                return i18n.changeLanguage('es');
                            },
                            style: styles_1.default.button,
                        },
                        react_1.default.createElement(react_native_paper_1.Checkbox, {
                            status: checked ? 'checked' : 'unchecked',
                            onPress: function () {
                                setChecked(!checked);
                            },
                        }),
                        react_1.default.createElement(
                            react_native_paper_1.Text,
                            { style: styles_1.default.text },
                            'Spanish',
                        ),
                    ),
                    react_1.default.createElement(
                        react_native_1.TouchableOpacity,
                        {
                            onPress: function () {
                                return i18n.changeLanguage('de');
                            },
                            style: styles_1.default.button,
                        },
                        react_1.default.createElement(react_native_paper_1.Checkbox, {
                            status: checked ? 'checked' : 'unchecked',
                            onPress: function () {
                                setChecked(!checked);
                            },
                        }),
                        react_1.default.createElement(
                            react_native_paper_1.Text,
                            { style: styles_1.default.text },
                            'German',
                        ),
                    ),
                ),
            ),
            react_1.default.createElement(
                react_native_1.View,
                { style: styles_1.default.row },
                react_1.default.createElement(
                    react_native_paper_1.Button,
                    { icon: 'logout', onPress: onLogout },
                    'Logout',
                ),
            ),
        ),
    );
};
exports.default = Drawer;
