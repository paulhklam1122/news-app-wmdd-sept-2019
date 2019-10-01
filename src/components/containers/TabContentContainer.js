import React, { Component } from 'react'
import { Alert, Text } from 'react-native'
import { getArticles } from '../../service/api'
import TabContent from '../tabs/TabContent'

class TabContentContainer extends Component {
  state = {
    articleData: {},
    articles: [],
    isLoading: true,
    modalVisible: false,
    source: this.props.source || 'bbc-news'
  }

  // Lifecycle Methods

  componentDidMount() {
    const { source } = this.state
    this.fetchNews(source)
  }

  // API Call Functions
  fetchNews = async (source) => {
    getArticles(source).then(articles => {
      this.setState({
        articles: articles,
        isLoading: false
      })
    }, error => {
        Alert.alert('Error', `Something went wrong! ${error}`)
    })
  }

  render() {
    const { articles, articleData, isLoading, modalVisible } = this.state
    return (
      <TabContent
        articles={articles}
        articleData={articleData}
        isLoading={isLoading}
        modalVisible={modalVisible}
      />
    )
  }
}

export default TabContentContainer