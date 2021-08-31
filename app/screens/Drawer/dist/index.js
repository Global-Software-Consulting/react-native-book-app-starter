"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var drawer_1 = require("@react-navigation/drawer");
var react_native_paper_1 = require("react-native-paper");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var ThemeController_1 = require("../../components/ThemeController");
var react_redux_1 = require("react-redux");
var loginActions = require("store/actions/loginActions");
var styles_1 = require("./styles");
var react_i18next_1 = require("react-i18next");
var i18n_1 = require("../../components/Languages/i18n");
var initI18n = i18n_1["default"];
var Drawer = function (props) {
    var _a = react_1["default"].useState(false), checked = _a[0], setChecked = _a[1];
    var _b = react_i18next_1.useTranslation(), t = _b.t, i18n = _b.i18n;
    var dispatch = react_redux_1.useDispatch();
    var onLogout = function () { return dispatch(loginActions.logOut()); };
    return (react_1["default"].createElement(drawer_1.DrawerContentScrollView, __assign({}, props),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].drawerContent },
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].userInfoSection },
                react_1["default"].createElement(react_native_paper_1.Avatar.Image, { source: {
                        uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'
                    }, size: 50 }),
                react_1["default"].createElement(react_native_paper_1.Title, { style: styles_1["default"].title }, "Dawid Urbaniak"),
                react_1["default"].createElement(react_native_paper_1.Caption, { style: styles_1["default"].caption }, "@trensik"),
                react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].row },
                    react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].section },
                        react_1["default"].createElement(react_native_paper_1.Paragraph, { style: [styles_1["default"].paragraph, styles_1["default"].caption] }, "202"),
                        react_1["default"].createElement(react_native_paper_1.Caption, { style: styles_1["default"].caption }, "Following")),
                    react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].section },
                        react_1["default"].createElement(react_native_paper_1.Paragraph, { style: [styles_1["default"].paragraph, styles_1["default"].caption] }, "159"),
                        react_1["default"].createElement(react_native_paper_1.Caption, { style: styles_1["default"].caption }, "Followers")))),
            react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "account-outline", color: color, size: size }));
                }, label: "Profile", onPress: function () { } }),
            react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "tune", color: color, size: size }));
                }, label: "Preferences", onPress: function () { } }),
            react_1["default"].createElement(drawer_1.DrawerItem, { icon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "bookmark-outline", color: color, size: size }));
                }, label: "Bookmarks", onPress: function () { } }),
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].preference },
                react_1["default"].createElement(react_native_paper_1.Text, { style: styles_1["default"].text },
                    t('Dark Theme'),
                    " "),
                react_1["default"].createElement(ThemeController_1["default"], null)),
            react_1["default"].createElement(react_native_paper_1.List.Accordion, { title: react_1["default"].createElement(react_native_paper_1.Text, { style: styles_1["default"].text },
                    t('Languages'),
                    " ") },
                react_1["default"].createElement(react_native_1.View, { style: { marginVertical: -5 } },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return i18n.changeLanguage('en'); }, style: styles_1["default"].button },
                        react_1["default"].createElement(react_native_paper_1.Checkbox, { status: checked ? 'checked' : 'unchecked', status: checked ? 'checked' : 'unchecked', onPress: function () {
                                setChecked(!checked);
                            } }),
                        react_1["default"].createElement(react_native_paper_1.Text, { style: styles_1["default"].text }, "English")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return i18n.changeLanguage('es'); }, style: styles_1["default"].button },
                        react_1["default"].createElement(react_native_paper_1.Checkbox, { status: checked ? 'checked' : 'unchecked', onPress: function () {
                                setChecked(!checked);
                            } }),
                        react_1["default"].createElement(react_native_paper_1.Text, { style: styles_1["default"].text }, "Spanish")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return i18n.changeLanguage('de'); }, style: styles_1["default"].button },
                        react_1["default"].createElement(react_native_paper_1.Checkbox, { status: checked ? 'checked' : 'unchecked', onPress: function () {
                                setChecked(!checked);
                            } }),
                        react_1["default"].createElement(react_native_paper_1.Text, { style: styles_1["default"].text }, "German")))),
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].row },
                react_1["default"].createElement(react_native_paper_1.Button, { icon: "logout", onPress: onLogout }, "Logout")))));
};
exports["default"] = Drawer;
