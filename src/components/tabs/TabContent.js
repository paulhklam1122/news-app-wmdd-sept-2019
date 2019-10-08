import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, List } from 'native-base'

import Loading from '../Loading'
import Article from '../Article'
import ArticleModal from '../modals/ArticleModal'

const TabContent = (props) => {
  const { articles, articleData, isLoading, modalVisible, onArticleModalClose, onArticlePress, onArticleShare } = props
  const renderLoadingState = () => (
    <Loading
      isLoading={isLoading}
      style={styles.loadingState}
    />
  )

  const renderArticles = () => (
    <List
      dataArray={articles}
      renderRow={(article) => {
        return (
          <Article
            article={article}
            onPress={onArticlePress}
          />
        )
      }}
      keyExtractor={(article, index) => index.toString()}
    />
  )

  const renderContent = () => (
    isLoading ? (
      renderLoadingState()
    ) : (
        renderArticles()
    )
  )

  return (
    <Container>
      <Content>
        {renderContent()}
      </Content>
      <ArticleModal
        articleData={articleData}
        showModal={modalVisible}
        onClose={onArticleModalClose}
        onArticleShare={onArticleShare}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  loadingState: {
    marginTop: 250
  }
})

export default TabContent
