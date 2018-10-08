import React, { Component } from 'react';
import { FlatList } from 'react-native';
// import getNews function from news.js
import { getNews } from "./src/news.js";
import { Article } from './src/components/Article';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);

  }
  ComponentDidMount() {
    this.fetchNews();

  }
  fetchNews() {
  getNews()
    .then(articles => this.setState({ articles, refreshing: false }))
    .catch(() => this.setState({ refreshing: false }));
}
handleRefresh() {
  this.setState({
    refreshing: true
  },
    () => this.fetchNews()
  );
}
render() {
  console.log("app.js",this.props);
  return (
    <FlatList
      data={this.state.articles}
      renderItem={({ item }) => <Article article={item} />}
      keyExtractor={item => item.url}
      refreshing={this.state.refreshing}
      onRefresh={this.handleRefresh.bind(this)}
    />

  );
}
}


