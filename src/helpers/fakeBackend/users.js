import { find, reduce } from 'lodash';

export const usersApi = users => (opts, url, resolve, reject) => {
  if (url.endsWith('/users')) {
    switch (opts.method) {
      case 'GET':
        resolve({ json: () => ({ users }) });
    }
  }
};
