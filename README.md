# newsApp Application  Using React Native

Objective: A react native mobile application that reads news articles from a newsapi.org.

# Anatomy of the Application:

The main page of the app or the first page that loads when the application starts, a bottom tab navigator that contains three tabs:

1. **The Top Headlines Tab** : It shows a list of the top headlines in the world. Two pickers are included: the first picker enables the user to select which country's headlines he/she wants to see. Three options are available: "All Countries", "Egypt", and "UAE". The second picker enables the user to check which categpory of news he wants to check: Business, Sports, etc... A list of updated headlines is displayed below the pickers. Upon clicking on a specific headline on the list, the user navigates to a new screen displaying the headline in full details.

2. **The Sources Tab** : It shows a list of the available sources of the news outlets. Clicking on the **VIEW** button, takes us to the list of headlines published by this news outlet and similarly clicking on a headline on this list takes us to the detailed article about this headline. 

3. **The History Tab**: It displays the list of headlines that the user visited. If a headline is visited more than once, the headline will be displayed once according to the date it was last visited and won't be displayed twice. Clicking on a headline on this list takes us to the detailed article about this headline. 

## Hierarchy of the App Components

1. **App** => **Main** => **HeadlineStack** => **Headlines**( contains **DetailedArticle** and **PickerContainer** components) => **HeadlineDetails**.
2. **App** => **Main** => **SourcesStack** => **Sources** => **HeadlinesPerSource**(contains **Detailed Article** component) => **HeadlineDetails**.
3. **App** => **Main** => **HistoryStack** => **HeadlinesHistory** ( contains **Detailed Article** component) => **HeadlineDetails**.

---

## Main Component 

It includes the **BottomTab Navigator** that has three tabs as previously mentioned. We used the **createBottomTabNavigator()** from react-native navigation library to create it.

## HeadlineStack, SourceStack, HistoryStack Components

We used the **createStackNavigator()** from react-native navigation library to create them. **HeadlineStack** component contains two stacks: The **Headlines** Component and the **HeadlineDetails** Component. Similarly the **HistoryStack** contains two stacks: The **HeadlinesHistory** Component and the **HeadlineDetails** Component again. Finally, the **SourcesStack** component contains three stacks: **Sources**, **HeadlinesPerSource**,and finally again the **HeadlineDetails** Component.

## PickerContainer Component

It contains two pickers from the 'react-native-picker' library that allow us to select the country and the category of the news that we want to read about. It will be used in **Headlines** Component. 

## DetailArticle Component

This component will be used as the **renderItem** component in the **FlatList** of each of the **Headlines**, **Sources**, and **HeadlinesHistory** components to render each item of the flat list. Upon pressing on the article, it is saved in the local storage of the app by using the react-native-async-storage library. 

## Headlines Component

It contains the **PickerContainer** component and a **FlatList** react native component that renders the **DetailArticle** as renderItem. It uses the **useFocusEffect** from the react-native navigation library to refresh the FlatList when we leave the tab and come back to it afterwards. It uses the  **useEffect** hook to execute the getHeadlines(country, category) action which reads the top headlines from the api when the component mounts or updates. 

## Sources Component

It contains a **FlatList** react native component that renders a container with the name of the news agency and a **VIEW** button in it  as renderItem. It uses the **useFocusEffect** from the react-native navigation library to refresh the FlatList when we leave the tab and come back to it afterwards. It uses the  **useEffect** hook to execute the getSources() action which reads the sources from the api when the component mounts or updates. 

## HeadlinesPerSource Component

It contains a **FlatList** react native component that renders the **DetailArticle** as renderItem. It uses the **useFocusEffect** from the react-native navigation library to refresh the FlatList when we leave the tab and come back to it afterwards. It uses the  **useEffect** hook to execute the getHeadlines(source) action which reads the headlines of each source from the api when the component mounts or updates. 

## HeadlinesHistory Component

It contains a **FlatList** react native component that renders the **DetailArticle** as renderItem. It uses the  **useEffect** hook to execute the getArticlesFromStorage() async function which reads the articles previously visited by the user from the app's local storage when the component mounts or updates. To read the articles from the local storage, we used the react-native-async-storage library.

## HeadlineDetails Component

It is the component used to display the headline articles screen in detail.

## Styled-Components Components:

We have three additional files: **DetailedArticleStyledComponents, HeadlineDetailsStyledComponent, SourceListItemStyledComponents** where we created styled Text and Button elements used in the aforementioned components using the **styled-components** library.

---

## Accessing the API on the server

We used **redux and react-redux** to access the API on the server. We defined six files for this purpose:

1. **actionTypes.js** : The type properties of the actions to be dispatched are defined here.
2. **api.js** : The functions used to access and interact with the API are defined in this file.
3. **actions.js** : The actions to be dispatched by the components of the app are defined in this file.
4. **reducers.js** : The reducers that execute a specific function according to the action received are defined here.
5. **rootReducer.js** : Since redux store receives one and only one  reducer, the reducers defined in **reducers.js** are combined into one and  reducer that interacts with the redux store in this file.
6. **store.js**:The redux store is defined here.
