import { User } from './interface';

export const admin: User = {
  id: 1,
  name: 'User',
  email: 'pXXXXXXX@caixa.gov.br',
  avatar: './assets/images/user.png',
};

export const guest: User = {
  name: 'unknown',
  email: 'unknown',
  avatar: './assets/images/user.png',
};
