import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import MetricCard from './MetricCard';
import { white } from '../utils/colors';

class EntryDetail extends Component {
  setTitle = (formattedDate) => {
    this.props.navigation.setOptions({
      title: formattedDate,
    });
  };
  render() {
    const { entryId, metrics, formattedDate } = this.props;
    this.setTitle(formattedDate);
    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
});

function mapStateToProps(state, { route }) {
  const { entryId, formattedDate } = route.params;
  return {
    entryId,
    formattedDate,
    metrics: state[entryId],
  };
}
export default connect(mapStateToProps)(EntryDetail);
