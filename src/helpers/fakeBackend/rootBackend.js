import { usersData } from 'helpers/fakeData/usersData';
import { tasksData } from 'helpers/fakeData/tasksData';
import { find } from 'lodash';
import { tasksApi } from 'helpers/fakeBackend/tasks';
import { usersApi } from 'helpers/fakeBackend/users';

let users = usersData;
let tasks = tasksData;

const APIs = {
  users: {
    url: '/users',
    api: usersApi(users)
  },
  desks: {
    url: '/tasks',
    api: tasksApi(tasks)
  }
};

export const configureFakeBackend = () => {
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const validAPI = find(APIs, api =>  url.includes(api.url));
        !!validAPI ? validAPI.api(opts, url, resolve, reject) : null;
      }, 1000);
    });
  };
};
