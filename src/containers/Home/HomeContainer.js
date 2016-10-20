import React, { Component, PropTypes } from 'react';
import { ListView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchPages } from '~/redux/modules/pages';
import { selectPage } from '~/redux/modules/selectPage';
import { Home } from '~/components';

class HomeContainer extends Component {

  static propTypes = {
  }

  componentWillMount() {
    this.props.fetchPages();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.pages);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.dataSource}
          renderRow={rowData =>
            <Home
              page={rowData}
              onSelectPage={this.props.onSelectPage}
            />
           }
        />
      </View>
    );
  }
}

function mapStateToProps({ pages, select }) {
  return {
    pages,
    select
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPages: () => dispatch(fetchPages()),
    onSelectPage: (page) => dispatch(selectPage(page))
  };
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 65,
    flex: 1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
