import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveArticlesToStorage = async (article) => {
    AsyncStorage.getItem('articles')
    .then((articles) => {
      const articlesArray = articles ? JSON.parse(articles) : [];
      articlesArray.push(article);
      AsyncStorage.setItem('articles', JSON.stringify(articlesArray));
    });
}
