# Tryft AI

> AI-powered savings & budgeting for the next generation of dreamers, hustlers, and doers in Africa.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Folder Structure](#folder-structure)
5. [State Management](#state-management)
6. [Animations](#animations)
7. [Navigation](#navigation)
8. [Assets & Theming](#assets--theming)
9. [API & Services](#api--services)
10. [Development Setup](#development-setup)
11. [Scripts & Commands](#scripts--commands)
12. [Deployment](#deployment)
13. [Contributing](#contributing)
14. [License](#license)

---

## Project Overview

TryftAI is a **React Native app** designed to provide seamless user experience with:

- Stop users from wondering where their money goes
- Help users Save without thinking about it

The goal is for **developers to quickly understand and extend the app**, while keeping UI/UX polished.

---

## Tech Stack

- **Frontend:** React Native, Expo
- **State Management:** Redux Toolkit, Redux-Persist
- **Animations:** Reanimated v4, Animated API
- **UI:** Tailwind CSS (`nativewind`) - no ui libraries(every component should be custom build (unless would take a long time to design components) and only assited with native ui such as Calendar/Date Picker, BottomSheet, Image Picker, Document Picker)
- **Navigation:** Expo Router
- **Backend:** REST

---

## Architecture

The app follows a **modular and scalable architecture**:

```
App
├─ components/
│  ├─ atoms/       # Small reusable UI components (Text, Button, Input, etc)
│  ├─ molecules/   # Combined components (Cards, BottomSheet, Modal, Container, etc)
│  ├─ modules/     # Feature-level components (Onboarding, Profile, Dashboard)
├─ store/
│  ├─           # Redux slices for state
│  ├─ store.ts     # Store configuration
├─ app/            # Router & screen structure
├─ assets/         # Images, icons, fonts, Videos (Assets in general)
├─ libs/*          # Helper functions, constants, configs
├─ api/            # API calls, third-party integrations, Server/Backend Communincation
│  ├─ services/    # API Services and Implementation (Service Layer)
│  ├─ configs/      # API Configs
│  ├─ hooks/       # API Hooks exposing Api Services to be called in the application
├─ hooks/          # Global Reusable hooks
│  ├─ store/       # Reusable Store/Redux Hooks (properly typed)
├─ ├─ theme/       # Theme hooks / useColorScheme to update user current theme (future impl. for auto detecting user device theme would be done here)

```

---

## State Management

- **Redux Toolkit** is used for global state:
  - `onboardingSlice` – Handles first-time user onboarding flags
  - `themeSlice` – Tracks dark/light mode

- **Redux-Persist** is used to persist state between app restarts
- **Hooks:** `useAppDispatch`, `useAppSelector` auto-infer types for safety

---

## Animations

- **Reanimated v4** powers majority of the app animations

---

## Navigation

- **Expo Router** handles navigation for clean file-based routing
- Screens are organized in `(folder)/*.screen.tsx`
- Onboarding automatically redirects to login or main app after completion

---

## Assets & Theming

- **Fonts**: Custom Text component wraps `React Native Text` for consistent font usage
- **Images**: Stored in `assets/images` and imported dynamically
- **Theme**: Dark/light mode handled via Redux slice `in-progress`

---

## API & Services

- API calls handled in `services/*.service.ts`
- Services are modular and can be injected into screens or hooks
- Configurable base URLs and headers for dev/staging/production

---

## Development Setup

1. **Clone repository:**

   ```bash
   git clone git@github.com:Moyotecky/tryftai-mobile-v1.git
   cd tryftai-mobile-v1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run Metro bundler:**

   ```bash
   npm start
   ```

4. **Run on device/emulator:**

   ```bash
   npm run ios
   npm run ios -- --device [`to select device to run on`]
   npm run android
   ```

---

## Scripts & Commands

- `npm start` – Starts Expo development server
- `npm run ios` – Opens iOS simulator (use -- --device to select a device)
- `npm run android` – Opens Android emulator
- `npm run lint` – Runs ESLint
- `npx expo prebuild` – Prebuilt native android and ios directories
- `npx expo prebuil --clean` – Prebuilt native android and ios directories on a clean slate

---

## Deployment

- **iOS**: Built via EAS, deployed to TestFlight / App Store
- **Android**: Built via Expo or EAS, deployed to Play Store
- **Environment variables** stored in `.env` or via EAS secrets

---

## Contributing

1. Fork the repository
2. Create a branch `feature/your-feature`
3. Implement feature or fix bug
4. Write unit tests if applicable
5. Submit a Pull Request with detailed description

---
