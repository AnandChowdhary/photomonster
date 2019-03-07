import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from "expo";
import Touchable from 'react-native-platform-touchable';

export default class PhotoDetails extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        {/* <Image
          style={{ width: '100%', paddingTop: '100%' }}
          source={{ uri: this.props.activePhoto && this.props.activePhoto.node && this.props.activePhoto.node.image && this.props.activePhoto.node.image.uri ? this.props.activePhoto.node.image.uri : '' }}
        /> */}
        <View>
          <View style={styles.listItem}>
            <View style={styles.listIcon}>
              <Ionicons name="ios-time" size={22} color="#ccc" />
            </View>
            <View>
              <Text style={styles.listText}>
                {this.props.activePhoto && this.props.activePhoto.node && this.props.activePhoto.node.timestamp ? new Date(this.props.activePhoto.node.timestamp * 1000).toLocaleString() : 'Time'}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.listItem}>
            <View style={styles.listIcon}>
              <Ionicons name="ios-albums" size={22} color="#ccc" />
            </View>
            <View>
              <Text style={styles.listText}>
                {this.props.activePhoto && this.props.activePhoto.node && this.props.activePhoto.node.group_name ? this.props.activePhoto.node.group_name : 'Album'}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.listItem}>
            <View style={styles.listIcon}>
              <Ionicons name="ios-resize" size={22} color="#ccc" />
            </View>
            <View>
              <Text style={styles.listText}>
                {this.props.activePhoto && this.props.activePhoto.node && this.props.activePhoto.node.image && this.props.activePhoto.node.image && this.props.activePhoto.node.image.width && this.props.activePhoto.node.image.height ? this.props.activePhoto.node.image.width + ' × ' + this.props.activePhoto.node.image.height : 'Size'}
              </Text>
            </View>
          </View>
        </View>
        {!!this.props.activePhoto && !!this.props.activePhoto.node && !!this.props.activePhoto.node.image && !!this.props.activePhoto.node.image && !!this.props.activePhoto.node.image.playableDuration && <View>
          <View style={styles.listItem}>
            <View style={styles.listIcon}>
              <Ionicons name="ios-videocam" size={22} color="#ccc" />
            </View>
            <View>
              <Text style={styles.listText}>
                {this.props.activePhoto.node.image.playableDuration} seconds
              </Text>
            </View>
          </View>
        </View>}
        {!!this.props.activePhoto && !!this.props.activePhoto.node && !!this.props.activePhoto.node.image && !!this.props.activePhoto.node.location && !!this.props.activePhoto.node.location.latitude && !!this.props.activePhoto.node.location.longitude && <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => {
              WebBrowser.openBrowserAsync(`https://www.google.com/maps?q=${this.props.activePhoto.node.location.latitude},${this.props.activePhoto.node.location.longitude}`);
              if (typeof this.props.close === "function") this.props.close();
            }}
          >
          <View>
            <View style={styles.listItem}>
              <View style={styles.listIcon}>
                <Ionicons name="ios-compass" size={22} color="#ccc" />
              </View>
              <View>
                <Text style={styles.listText}>
                  Open location in Maps
                </Text>
              </View>
            </View>
          </View>
        </Touchable>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  listIcon: { marginRight: 10 },
  listText: { fontSize: 15, marginTop: 1 }
});
