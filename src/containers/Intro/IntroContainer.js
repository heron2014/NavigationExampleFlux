import {connect} from 'react-redux'
import { Intro } from '~/components';

function mapStateToProps({nav, start}) {
  return {
    nav,
    start
  }
}

export default connect(mapStateToProps)(Intro)
