import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveArticlesToStorage = async (article) => {
    AsyncStorage.getItem('articles')
    .then((articles) => {
      let newArticle = {...article, viewedAt: new Date()};
      const articlesArray = articles ? JSON.parse(articles) : [];
      let newArticlesArray = articlesArray.filter(article => article.title !== newArticle.title);
      newArticlesArray.push(newArticle);
      // articlesArray.push(newArticle);
      // AsyncStorage.setItem('articles', JSON.stringify(articlesArray));
      AsyncStorage.setItem('articles', JSON.stringify(newArticlesArray));
    });
}
