import React from 'react'
// import { Dimensions, Modal, View } from 'react-native'
import { Dimensions, Modal, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Container, Header, Left, Right, Body, Title, Content } from 'native-base'
import { WebView } from 'react-native-webview'

const webViewHeight = Dimensions.get('window').height - 56

const ArticleModal = (props) => {
  const { articleData, onArticleShare, onClose, showModal } = props
  const { title, url } = articleData
  return (
    <View>
      <Modal
        animationType='slide'
        transparent
        visible={showModal}
        onRequestClose={onClose}
      >
        <Container style={{ backgroundColor: '#fff' }}>
          <Header>
            <Left>
              <Icon.Button
                backgroundColor='transparent'
                color='black'
                name='times'
                onPress={onClose}
              >
              </Icon.Button>
            </Left>
            <Body>
              <Title children={title} stye={{ color: 'black' }} />
            </Body>
            <Right>
              <Icon.Button
                backgroundColor='transparent'
                color='black'
                name='share-square'
                onPress={() => onArticleShare(title, url)}
              />
            </Right>
          </Header>
          <Content contentContainerStyle={{ height: webViewHeight }}>
            <WebView
              source={{ url }}
              style={{ flex: 1 }}
              onError={onClose}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
      </Modal>
    </View>
  )
}

export default ArticleModal
