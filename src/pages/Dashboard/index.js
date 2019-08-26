import React from 'react';

// import { Container } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const response = api.get('meetups');

  console.tron.log(response);

  return <h1>Dashboard</h1>;
}
