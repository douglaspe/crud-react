import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { getAllUsers } from '../../actions';

class UsersList extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        const { users } = this.props;
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
                    {
                        Array.from(users).map(user => (
                                <User user={user} key={user.id} />
                        ))
                    }
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
  
export default connect(
    mapStateToProps,
    { getAllUsers }
)(UsersList);