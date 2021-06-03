# newsApp Application  Using React Native

Objective: A react native mobile application that reads news articles from a newsapi.org.

# Anatomy of the Application:

The main page of the app or the first page that loads when the application starts, a bottom tab navigator that contains three tabs:

1. **The Top Headlines Tab** : It shows a list of the top headlines in the world. Two pickers are included: the first picker enables the user to select which country's headlines he/she wants to see. Three options are available: "All Countries", "Egypt", and "UAE". The second picker enables the user to check which categpory of news he wants to check: Business, Sports, etc... A list of updated headlines is displayed below the pickers. Upon clicking on a specific headline on the list, the user navigates to a new screen displaying the headline in full details.

2. **The Sources Tab** : It shows a list of the available sources of the news outlets. Clicking on the **VIEW** button, takes us to the list of headlines published by this news outlet and similarly clicking on a headline on this list takes us to the detailed article about this headline. 

3. **The History Tab**: It displays the list of headlines that the user visited. If a headline is visited more than once, the headline will be displayed once according to the date it was last visited and won't be displayed twice. Clicking on a headlineon this list takes us to the detailed article about this headline. 

## Hierarchy of the App Components

1. **App** => **Main** => **HeadlineStack** => **Headlines**( contains **DetailedArticle** and **PickerContainer** components) => **HeadlineDetails**.
2. **App** => **Main** => **SourcesStack** => **Sources** => **HeadlinesPerSource**(contains **Detailed Article** component) => **HeadlineDetails**.
3. **App** => **Main** => **HeadlineStack** => **HeadlinesHistory** ( contains **Detailed Article** component) => **HeadlineDetails**.

---

# Main Component 

It includes the **BottomTab Navigator** that has three tabs as previously mentioned. We used the **createBottomTabNavigator()** from react-native navigation library to create it.

# Headline Stack Component

We used the **createStackNavigator()** from react-native navigation library to create it. It contains two stacks: The **Headlines** Component and the **HeadlineDetails** Component.

## Picker Component

It contains two pickers from the 'react-native-picker' library that allow us to select the country and the category of the news that we want to read about. It will be used in **Headlines** Component. 

