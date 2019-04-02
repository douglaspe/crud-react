import { connect } from 'react-redux';
import { updateUser } from '../../actions';
import NewUser from './NewUser';

const mapDispatchToProps = dispatch => {
  return {
    onUpdateUser: id => {
      dispatch(updateUser(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewUser);