<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,6,12,14,24&height=160&section=header&text=React%20Native%20Book%20App%20Starter&fontSize=32&fontColor=ffffff&animation=twinkling&fontAlignY=36&desc=A%20feature-rich%20book%20reader%20app%20built%20with%20React%20Native&descAlignY=58&descSize=14&descColor=a8b2d8" width="100%" />
</div>

<div align="center">

[![React Native](https://img.shields.io/badge/React_Native-0.66-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux_Saga-764ABC?logo=redux&logoColor=white)](https://redux-saga.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Stars](https://img.shields.io/github/stars/Global-Software-Consulting/react-native-book-app-starter?style=flat)
![Forks](https://img.shields.io/github/forks/Global-Software-Consulting/react-native-book-app-starter?style=flat)

**A production-quality React Native starter** with book browsing, favorites, text-to-speech, camera, dark mode, i18n, and full auth flow. iOS + Android.

</div>

---

## Demo

<p align="center">
  <img src="https://user-images.githubusercontent.com/78399841/135077493-12001837-17a3-4d59-a884-54368ebd6e51.gif" width="250" title="Book App">
  <img src="https://user-images.githubusercontent.com/78399841/135077517-42365bf6-53f9-4563-ad2a-0299423aaaf9.gif" width="250" title="Book App">
  <img src="https://user-images.githubusercontent.com/78399841/135077522-6ceddced-0b17-48b2-8e42-97448d8b2d1c.gif" width="250" title="Book App">
</p>

---

## Features

- Find and save books to your list
- Add books to favourites
- Text-to-Speech integration
- Camera with image cropping
- Shimmer/placeholder loading animations
- Global theming — light & dark mode
- Multi-language support (i18n)
- Login / Signup / Forgot Password
- Tab Bar & Drawer navigation
- User profile
- Landscape handling & responsive design
- Redux with Saga
- CodePush via App Center
- Husky pre-commit hooks
- ESLint for clean code
- Unit tests with Jest
- iOS + Android

## Test Coverage

<p align="center">
  <img src="https://user-images.githubusercontent.com/88474289/141447177-9b245e63-3e9c-4f7b-a87d-349ba30529e3.png" title="Coverage">
</p>

---

## Project Structure

```
app/
├── Entrypoint.tsx          # App entry point
├── assets/                 # Images, fonts, icons
├── components/             # Reusable components
├── config/
│   ├── Language/           # i18n language files
│   └── theme/              # Light & dark themes
├── models/                 # TypeScript models
├── navigation/             # React Navigation setup
├── screens/                # App screens
├── services/               # API services
└── store/                  # Redux + Saga
```

---

## Quick Start

```bash
# Clone
git clone https://github.com/Global-Software-Consulting/react-native-book-app-starter.git
cd react-native-book-app-starter

# Install dependencies
yarn install

# iOS
cd ios && pod install && cd ..
yarn ios

# Android
yarn android
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native 0.66 + TypeScript |
| State | Redux + Redux Saga |
| Navigation | React Navigation (Tab + Drawer) |
| Theming | Custom light/dark mode |
| i18n | Multi-language support |
| TTS | Text-to-Speech library |
| Camera | Image capture + cropping |
| Testing | Jest |
| Code Quality | ESLint + Prettier + Husky |
| OTA Updates | CodePush via App Center |

---

## Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

---

## License

[MIT](LICENSE)

---

<div align="center">

**Built and maintained by [Global Software Consulting](https://github.com/Global-Software-Consulting)**

We build production software, AI agents, and developer tools for startups and enterprises.

<a href="https://gsoftconsulting.com/">Website</a> &nbsp;&middot;&nbsp; <a href="mailto:sales@gsoftconsulting.com">Hire Us</a> &nbsp;&middot;&nbsp; <a href="https://pk.linkedin.com/company/global-software-consulting">LinkedIn</a>

</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,6,12,14,24&height=100&section=footer" width="100%" />
</div>
