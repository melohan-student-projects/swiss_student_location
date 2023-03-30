![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

# Swiss Student Location

## Project Goal

The goal of this project is a real estate application for students. The application will allow the user to search for
student housing in a geographical area. It will allow to see the details of a real estate ad and to be able to bookmark
it.


## Table of content


1. [Project Goal](#project-goal)
2. [Setting up dev](#setting-up-dev)
   1. [Requirements](#requirements)
   2. [Clone the repository](#clone-the-repository)
   3. [Configuration](#configuration)
   4. [Dependencies installation](#dependencies-installation)
   5. [Run](#run)
   6. [Testing](#testing)
3. [Project directory structure](#project-directory-structure)
4. [Contributing](#contributing)
5. [Project technologies](#project-technologies)
6. [Licence](#licence)

## Setting up dev

### Requirements

| Version       | Description        |
|---------------|--------------------|
| npm 8.18.0    | To install pnpm    |
| pnpm 7.26.3   | Package manager    |
| nodejs 18.7.0 | For code execution |

> Prerequisites `pnpm 7.26.3` or higher refer to this [documentation](https://pnpm.io/installation)

### Clone the repository

```shell
git clone git@github.com:melohan/swiss_student_location.git
cd swiss_student_location
git switch develop
```

### Configuration

1. Clone this repository onto your local machine.
2. Open a terminal window and navigate to the `./swiss_student_location/swiss_student_location` directory of the project.
3. In the project folder, copy `/src/config/example.firebase.tsx` and name it `/src/config/firebase.tsx`
4. Then refer to this documentation to configure Firebase credentials: [React Firebase](https://github.com/melohan/swiss_student_location/wiki/2---REACT-Firebase)

### Dependencies installation

Execute the following command to install all the necessary dependencies.

```shell
pnpm install
```

### Run

1. To ensure the project runs properly, it is necessary to follow the instruction of this our [backend repository](The backend of our project is a FakeAPI (a JSON server).
   https://github.com/melohan/api_swiss_student_location).
2. Once you have cloned and run the JSON server you can run the project:
   ```shell
   pnpm run dev
   ```
Then open your browser and navigate to http://localhost:5173 to see the application running.

### Testing

The test framework for this project is [Jest](https://jestjs.io/docs/tutorial-react)
Execute the following command to run the tests

```sh
pnpm run test
```


## Project directory structure


```shell
.
├── babel.config.js
├── index.html
├── jest.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── public
├── setupTests.ts
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── data
│   ├── Main.tsx
│   ├── models
│   ├── pages
│   ├── services
│   └── vite-env.d.ts
├── tailwind.config.cjs
├── tests 
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```


| Directory/File      | Description                                                   |
|---------------------|---------------------------------------------------------------|
| jest.config.js      | Configuration file for Jest (testing framework)               |
| src/assets          | Contains static files such as images, videos, fonts, etc.     |
| src/components      | Directory of reusable React components                        |
| src/config          | Contains the configuration for Firebase                       |
| src/data            | Contains JSON data used in forms                              |
| src/model           | Contains data models                                          |
| src/pages           | React components for each page of the application             |
| src/service         | Contains services that communicate with the API               |
| tailwind.config.cjs | Configuration for Tailwind CSS, a utility-first CSS framework |
| tests/components    | Contains tests for components                                 |
| tests/pages         | Contains tests for pages                                      |

## Contributing

We welcome contributions to this project! If you have an idea for a new feature or have found a bug, please open
an issue on GitHub to let us know.
If you would like to contribute code to the project, please follow these steps:

1. Clone the repository to your local machine
2. Create your Feature Branch (git checkout -b feature/amazing_feature)
3. Write and test your code
4. Update the documentation as necessary
5. Submit a pull request. 

We will review your pull request and discuss any necessary changes before merging it.

Thank you for considering contributing to this project!

## Project technologies

This project uses the following technologies:

- [React](https://17.reactjs.org/docs/getting-started.html)
- [Vite](https://vitejs.dev/guide/)
- [Firebase](https://firebase.google.com/docs/guides)
- [Yup](https://www.npmjs.com/package/yup)
- [Formik](https://formik.org/docs/overview)
- [React Router](https://reacttraining.com/blog/react-router-v6-pre)
- [TailwindCSS](https://flowbite.com/docs/getting-started/quickstart/)
- [Babel](https://babeljs.io/docs/config-files)

## Licence

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the LICENSE file for more details.
