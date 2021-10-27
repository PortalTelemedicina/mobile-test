# Portal Telemedicina - Coding Test

## 1. Preparation

- [x] Initialize a new React Native project with typescript
- [x] Setup minimal boilerplate
  - [x] tsconfig paths
  - [x] code style(prettier, eslint, editorconfig)
  - [x] Unit Tests(Jest)
  - [x] E2E Tests(Detox)
  - [x] Git hooks(Husky, lint staged)

---

## 2. Functional Requirements

### List Specialists [FR1] ✅ Implemented

> **\*Description**: Users must be able to view all medical specialties available on the platform.\*

1. User opens the app;
2. The app makes a request to the server and display the available specialties registered;
3. Tapping on a medical specialty leads the user to **[[FR2]]().**

**Assumptions**:

- List medical specialties correctly
- The app should show a loading state while making the request
- The app should show an error screen if the request fails

### List doctors [FR2] ✅ Done

> **\*Description:** Users must be able to view all doctors available for the chosen medical specialty. For all doctors should be displayed the name, description, avatar with photo, distance from the user and actions depending on the available contacting information(call or chat).\*

1. User taps some medical specialty
2. The app displays doctors for that specific specialty
3. The app display for each doctor: name, description, avatar with photo, distance from user and the available contact information
4. If the user tap **call** leads to [[FR5]]()
5. If the user tap **chat** leads to **[[FR6]]()**

**Assumptions**:

- Should show the list with correct information
- The app should show a loading state while making the request
- The app should show an error screen if the request fails

---

## 3. Non-functional Requirements

### Handle network errors for all screens [NFR1] ✅ Done

> **\*Description:** Should show network error image(SVG) with the title "Ops!" and message "Parece que houve uma falha de conexão com à internet and below the "Tentar novamente" button".\*

### i18n [NFR2] ✅ Done

> **\*Description:** All texts should be translated and user can change language on the page settings. Available languages: english and Brazilian Portuguese.\*

### Light/Dark Mode [NFR5] ✅ Done

> **\*Description:** Users can change the theme on the settings page, it should affect all screens and components.\*

---

## 4. Libraries and resources

- [x] [UI Kitten](https://akveo.github.io/react-native-ui-kitten/docs/guides/getting-started#new-apps)
- [x] Eva Icon Pack
- [x] [SVG](https://github.com/react-native-svg/react-native-svg#installation)
- [x] [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [x] [Custom Fonts](https://akveo.github.io/react-native-ui-kitten/docs/guides/branding#typography)
- [x] [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [x] [i18n-js](https://github.com/fnando/i18n-js)

---

## 5. Structure

### Layers

![https://user-images.githubusercontent.com/20798819/138557744-ea4c2c19-8202-4f00-a352-8568b22c424d.jpg](https://user-images.githubusercontent.com/20798819/138557744-ea4c2c19-8202-4f00-a352-8568b22c424d.jpg)

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

- Domain Driven Design(DDD)
- Test driven development(TDD)
- Clean Architecture
- Conventional Commits
- SOLID Principles
- Small commits
- Testing AAA pattern(Arrange, Act & Assert)
- Design patters
  - Factory
  - Adapter
  - Composition root
  - Dependency injection

---

## Enhancements

- [ ] Add user authentication
- [ ] Better coverage of unit tests
- [ ] Write E2E tests
- [ ] Add sorting to the list of doctors
- [ ] Add chat UI
- [ ] Add call function
- [ ] Add shimmer effect to loadings
- [ ] Add random photos to doctors
- [ ] Add icon and splashscreen
- [ ] Persist user information

---

## Author

**Vitor Veras - vitorverasm@gmail.com**
