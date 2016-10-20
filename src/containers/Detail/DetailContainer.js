import { Detail } from '~/components';
import { connect } from 'react-redux';

function mapStateToProps({ pages, select }) {
  return {
    pages,
    select
  };
}

export default connect(mapStateToProps)(Detail);
