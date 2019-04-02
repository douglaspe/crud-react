import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import User from './User'
import { fetchAllUsers, deleteUser, loadUser } from '../../actions';

class UsersList extends Component {
    componentDidMount() {
        const { fetchAllUsers } = this.props;
        fetchAllUsers();
      }

    render() {
        const { users, deleteUser } = this.props;
        return (
                <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map(user => {
                            return (
                                <User user={user} onDelete={deleteUser} onLoadUser={loadUser} key={user.id} />
                            )
                        })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
  
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchAllUsers, deleteUser, loadUser }, dispatch)
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList);