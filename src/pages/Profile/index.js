import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-activity';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, FormUnform, InputUnform, ButtonSubmit } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <FormUnform initialData={profile} onSubmit={handleSubmit}>
        <InputUnform name="name" placeholder="Nome completo" />
        <InputUnform
          name="email"
          type="email"
          placeholder="Seu endereço de e-mail"
        />

        <hr />

        <InputUnform
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <InputUnform
          type="password"
          name="password"
          placeholder="Sua nova senha"
        />
        <InputUnform
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />

        <ButtonSubmit type="submit">
          {loading ? <Spinner color="#fff" size={14} /> : <>Salvar perfil</>}
        </ButtonSubmit>
      </FormUnform>
    </Container>
  );
}
