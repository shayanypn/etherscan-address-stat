


# Etherscan address stat
[![Build Status](https://travis-ci.com/shayanypn/etherscan-address-stat.svg?branch=master)](https://travis-ci.com/shayanypn/etherscan-address-stat)

Simple application to show an ethereum balance and transition by using its address. You can enter an ethereum address or you can choose from the last address you already used, then choose your network and search.

[Preview](https://etherscan-address-stat.vercel.app/)

![screen record of preview](https://github.com/shayanypn/etherscan-address-stat/blob/master/preview.gif)

## Available Scripts


    git clone https://github.com/shayanypn/etherscan-address-stat.git
    cd etherscan-address-stat
    npm install
    npm start

    //test
    npm run lint
    npm run test
    npm run test:coverage

    //build
    npm run build
    


## Interesting Code

To help guide you through the interesting pieces of this implementation note the following.

-  Note that  `<Modal />`  takes a  [`portalNodeId`](https://github.com/shayanypn/etherscan-address-stat/blob/c4e73076a7eaa3a5305129d22d8260b556bb5d21/src/components/Modal/index.tsx#L36)  prop. This can improve reusability with the help of  `ReactDOM.createPortal`  to allow rendering your modal in a DOM node that exists outside the DOM hierarchy of the parent component.
-  An [**API service**](https://github.com/shayanypn/etherscan-address-stat/blob/master/src/services/API/index.tsx) encapsulates all interaction with external apis. This removes the need to know how to do an api query from components and gives us a central location to add features such as caching and batching in the future.
-  The code also includes a **unit test** suite to provide a safety net and allow future work to refactor confidently.


## Project Structure
Project folder/directory structure

    /public/ - assets to be served directly by the webserver
    /src/ - All custom code
        /assets - icons and other resources used directly use code
        /components - components used across the application
        /containers - pages used across the application
        /services - services used across the application (this could be an API service, or future estimation of ethereum regarding of giving data)
        /styles - styles of application written in CSS
        /utils - useful or common tools used across the application rapidly
        /types.tsx - contain interfaces(aside from component interfaces which are located alongside relevant components) and types used in the application

### Component Structure
All code in this application should follow the below structure to be consistent with other parts of the application. The name of component or service ... consists of a folder/directory name and the entry point is the `index.ts` file. For other additional files like tests, you should add them under this folder with a suffix name, like `index.test.ts` or `index.stories.ts`, and for style, we use a consistent name as `main.css`

    /[component name]
    	/index.ts
    	/index.test.ts
    	/index.stories.ts
    	/main.css

#### Guidelines
 - Component (modules under `/components` directory) should work independently, without any storing or fetching data.
 - Containers/Pages are responsible for providing components dependencies and data, storing/restoring data and also build the follow of a page.
 - All API calls should happen in a service.


## Todo
To build this application as one purpose for now, each component suppose to act its role, however if we suppose to expand this application, it of course need some modifications as below
 - `<Transactions />` should change to a table component that give title, columns options and items.
 - `API` service should change to only user as an ajax caller. A new service should be built to handle different URL call.
 - Should use SASS to have better control on CSS and also reduce duplication.
