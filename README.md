# Portal Telemedicina - Coding Test

## 1. Preparation

- [x]  Initialize a new React Native project with typescript
- [x]  Setup minimal boilerplate
    - [x]  tsconfig paths
    - [x]  code style(prettier, eslint, editorconfig)
    - [x]  Unit Tests(Jest)
    - [x]  E2E Tests(Detox)
    - [x]  Git hooks(Husky, lint staged)

---

## 2. Functional Requirements

### Identify [FR0]

> ***Description**: On startup, users can input personal information to be identified inside the application. Personal information includes: name, birthday and email.*
> 
1. User opens the app;
2. Input name, birthday and email
3. On app header shows User name
4. On app header shows logout button **[[FR4]]()**

**Assumptions**:

- Should validate email with regex
- Birthday cannot be from future
- Name should be first and last name
- All fields required
- Persist user information on storage **[[NFR8]]()**
- Can **skip** to continue without giving information
- Should show user name on header
- Should show logout button

### List Specialists [FR1]

> ***Description**: Users must be able to view all medical specialties available on the platform.*
> 
1. User opens the app;
2. The app makes a request to the server and display the available specialties registered;
3. Tapping on a medical specialty leads the user to **[[FR2]]().**

**Assumptions**:

- List medical specialties correctly
- The app should show a loading state while making the request
- The app should show an error screen if the request fails

### List doctors [FR2]

> ***Description:** Users must be able to view all doctors available for the chosen medical specialty. For all doctors should be displayed the name, description, avatar with photo, distance from the user and actions depending on the available contacting information(call or chat).*
> 
1. User taps some medical specialty
2. The app displays doctors for that specific specialty
3. The app display for each doctor: name, description, avatar with photo, distance from user and the available contact information
4. If the user tap **call** leads to [[FR5]]()
5. If the user tap **chat** leads to **[[FR6]]()**

**Assumptions**:

- Should show the list with correct information
- The app should show a loading state while making the request
- The app should show an error screen if the request fails

### Logout [FR4]

> ***Description:** Users can remove their information by tapping the logout button. Once they do that the header no longer show the user name, but displays the message "Hi there!" and at the end of the screen the button "Sign In" [[FR0]]().*
> 
1. User taps logout buton
2. The app ask if want to logou? yes or no
3. If no, continue normaly
4. If yes, erase user information and change the view

**Assumptions**:

- Should show 1s loading while erasing
- Should show on header the "Hi There!" Text and Sign In button
- Should erase information

### Call doctor [FR5]

> ***Description:** When user tap **Call** button for some doctor from the list, the app shows the phone dialog with the doctor's phone number.*
> 
1. User taps to call doctor
2. App redirect to the native phone dialog with the doctor's number

**Assumptions**:

- Should redirect with correct number

### Chat with doctor [FR6]

> ***Description:** When user tap **Chat** button for some doctor from the list, the app shows a chat UI, with the doctor information, but without function.*
> 
1. User taps to chat with doctor
2. App navigates to the chat UI with the doctor information, but without actual function

**Assumptions**:

- Should navigate to chat
- Should display doctor information
- Should display mocking UI of a real time chat

---

## 3. Non-functional Requirements

### Handle network errors for all screens [NFR1]

> ***Description:** Should show network error image(SVG) with the title "Ops!" and message "Parece que houve uma falha de conexão com à internet and below the "Tentar novamente" button".*
> 

### i18n [NFR2]

> ***Description:** All texts should be translated and user can change language on the page settings. Available languages: english and Brazilian Portuguese.*
> 

### Cache icons and photos [NFR3]

> ***Description:** Pack all icons, fonts and photos with the actual bundle of the react native project.*
> 

### Shimmer effect [NFR4]

> ***Description:** For all loading states use the shimmer effect and render a simpler UI.*
> 

### Light/Dark Mode [NFR5]

> ***Description:** Users can change the theme on the settings page, it should affect all screens and components.*
> 

### Order doctors by distance [NFR6]

> ***Description:** On the doctors listing screen([[FR2]]()) Users can order the list by distance in kilometers descending and ascending.*
> 

### Render random photos for doctors [NFR7]

> ***Description:** Should display random photos for each doctor as an avatar.*
> 

### Persist user information [NFR8]

> ***Description:** Should persist user information after identification(**[[FR0]]()**).*
> 

---

## 4. Libraries and resources

- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/docs/guides/getting-started#new-apps)
- [Vector Icons](https://github.com/oblador/react-native-vector-icons#installation)
- [SVG](https://github.com/react-native-svg/react-native-svg#installation)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Expo Fonts](https://docs.expo.dev/guides/using-custom-fonts/)
- [Shimmer Effect](https://github.com/tomzaku/react-native-shimmer-placeholder#installation)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Axios](https://github.com/axios/axios#installing)
- [i18n-js](https://github.com/fnando/i18n-js)
- [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image#usage)
- [React Native Modal](https://github.com/react-native-modal/react-native-modal#setup) or [Botom Sheet](https://github.com/gorhom/react-native-bottom-sheet)
- [Get random avatar API](https://randomuser.me/documentation#format)

### Maybe use

- [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started#an-existing-app) or [Context API](https://pt-br.reactjs.org/docs/context.html)

---

## 5. Structure

### Layers

![architecture](https://user-images.githubusercontent.com/20798819/138557744-ea4c2c19-8202-4f00-a352-8568b22c424d.jpg)

### Folder Structure

```
src/app
  ├──domain
  |	  ├──usecases
  |	  |   └───someusecase
  |	  |        └──someusecase.ts
  |	  ├──entities
  |	  └──protocols
  |
  ├──application
  |   └───usecases
  |        └───someusecase
  |             ├──someusecase.ts
  |             └───someusecase.spec.ts
  |
  ├──adapters
  |   └───someadapter
  |        ├──someadapter.ts
  |        └───someadapter.spec.ts
  |
  ├──UI
  |  ├──shared
  |  |	  ├──components
  |  |    |   └───somecomponent
  |  |    |        ├──somecomponent.tsx
  |  |    |        └───somecomponent.spec.tsx
  |  |	  ├──styles
  |  |	  ├──routes
  |  |    ├──state
  |  |    └───types
  |  |
  |  └───pages
  |       └───somepage
  |            ├──index.tsx
  |            ├──components
  |            |   └───somecomponent
  |            |        ├──somecomponent.tsx
  |            |        └───somecomponent.spec.tsx
  |            ├──styles
  |            ├──state
  |            ├──tests
  |            └───routes
  |
  └───main
       ├──index.tsx
       └───factories

src/assets
  ├──	fonts
  └──	icons
 
src/config

```

---

## 6. Development methodology

---

## 7. Development

---

## 8. Release

---
