import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Spinner } from 'react-activity';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { checkIfPageIsDashboard } from '~/store/modules/dashboard/action';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);

  const dispatch = useDispatch();

  dispatch(checkIfPageIsDashboard(false));

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Sua nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />

        <div>
          <button type="submit">
            {loading ? (
              <Spinner color="#fff" size={14} />
            ) : (
              <>
                <MdAddCircleOutline size={20} color="#fff" />
                Salvar perfil
              </>
            )}
          </button>
        </div>
      </Form>
    </Container>
  );
}
