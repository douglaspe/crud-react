import React from 'react';
import Main from '../template/Main';
import FormUser from './FormUser';
import UsersList from './UsersList';

const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
};

export default ()  =>
    <Main {...headerProps}>
        <FormUser />
        <UsersList />
    </Main>