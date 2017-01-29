import { connect } from 'react-redux';

import { scrollChange } from '../actions';

import { Content } from '../components/Content';

const mapStateToProps    = state => state.scroll,
      mapDispatchToProps = dispatch => ({
        onScrollChange : scroll => {
          dispatch(scrollChange(scroll))
        }
      });

export default connect(mapStateToProps, mapDispatchToProps)(Content);
