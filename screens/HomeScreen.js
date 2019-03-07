import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  CameraRoll,
  Modal,
  TouchableHighlight
} from 'react-native';
import PhotoDetails from '../components/PhotoDetails';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Photomonster'
  };

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      hasNextPage: false,
      startFrom: undefined,
      loadingPhotos: false,
      visiblePhotos: 100,
      activePhoto: undefined
    };
  }

  componentDidMount() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.setState({ loadingPhotos: true });
    CameraRoll.getPhotos({
      first: 100,
      after: this.state.startFrom,
      assetType: 'All'
    })
    .then(response => {
      this.setState({
        photos: [...this.state.photos, ...response.edges],
        hasNextPage: response.page_info.has_next_page,
        startFrom: response.page_info.end_cursor
      });
    })
    .then(() => {
      // if (this.state.hasNextPage) return this.loadPhotos();
      this.setState({ activePhoto: this.state.photos[0] });
    })
    .catch(error => {

    })
    .then(() => this.setState({ loadingPhotos: false }));
  }

  isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;
  }

  showMore() {
    const visiblePhotos = this.state.visiblePhotos;
    const totalPhotos = this.state.photos.length;
    if (visiblePhotos >= totalPhotos) return;
    const add = totalPhotos - visiblePhotos < totalPhotos - visiblePhotos ? 50 : 50;
    this.setState({ visiblePhotos: (visiblePhotos + add) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={!!this.state.activePhoto && !!this.state.activePhoto.node}
          animationType='slide'
          onRequestClose={() => this.setState({ activePhoto: undefined })}
        >
          <View style={{ marginTop: 60 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Details</Text>
          </View>
          <PhotoDetails
            activePhoto={this.state.activePhoto}
            close={() => this.setState({ activePhoto: undefined })}
          /
          >
          <View style={{ marginTop: 20 }}>
            <Button
              onPress={() => this.setState({ activePhoto: undefined })}
              title='Close'
            />
          </View>
        </Modal>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          onScroll={({nativeEvent}) => {
            if (this.isCloseToBottom(nativeEvent)) this.showMore();
          }}
          scrollEventThrottle={16}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/robot-dev.png')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Photomonster helps you back up your photos to the cloud.
            </Text>
          </View>
          <View style={{ padding: 20, marginTop: 10 }}>
            <Text>
              {this.state.hasNextPage && 'Loading photos (found '}
              {this.state.photos.length} photos
              {this.state.hasNextPage && ')...'}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.state.photos.map((photo, index) => {
              if (index < this.state.visiblePhotos) return <TouchableHighlight
                key={`photo_${index}`}
                style={{ width: '20%' }}
                onPress={() => this.setState({ activePhoto: photo })}
              >
                <Image
                  style={{ width: '100%', paddingTop: '100%' }}
                  source={{ uri: photo.node.image.uri }}
                />
              </TouchableHighlight>;
            })}
          </View>
          <View style={{ padding: 20, marginTop: 10 }}>
            {
              this.state.visiblePhotos !== this.state.photos.length && <Button
                onPress={() => this.showMore()}
                title='Show more photos'
              />
            }
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  listIcon: {
    flexDirection: 'row',
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  }
});
