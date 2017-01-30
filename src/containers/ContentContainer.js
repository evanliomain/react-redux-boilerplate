import { connect } from 'react-redux';

import { scrollChange } from '../actions';

import { Content } from '../components/Content';

const mapDispatchToProps = dispatch => ({
        onScrollChange : scroll => {
          dispatch(scrollChange(scroll));
        }
      }),
      mapStateToProps    = state => state.scroll;

export default connect(mapStateToProps, mapDispatchToProps)(Content);
