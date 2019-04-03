import React from 'react'
import Main from '../template/Main'
import CreateUser from './CreateUser'
import UsersList from './UsersList';

const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

export default Users  =>
            <Main {...headerProps}>
                <CreateUser />
                <UsersList />
            </Main>