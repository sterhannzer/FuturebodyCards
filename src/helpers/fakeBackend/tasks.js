import { reduce } from "lodash";

export const tasksApi = tasks => (opts, url, resolve, reject) => {
  if (url.endsWith('/tasks')) {
    switch (opts.method) {
      case 'GET':
        const responseJson = { tasks };
        resolve({ json: () => responseJson });
        return;
      case 'POST':
        let params = JSON.parse(opts.body);
        if (params.hasOwnProperty('title') && params.hasOwnProperty('ownerId') && params.hasOwnProperty('description')) {
          const newTask = {
            id: reduce(tasks, (counter, task) => counter + 1, 0) + 1,
            ownerId: params.ownerId,
            description: params.description,
            title: params.title,
            closed: false
          };
          tasks[newTask.id] = newTask;
          const responseJson = {task: newTask};
          resolve({ ok: true, json: () => responseJson});
        } else {
          reject('No data provided');
        }
    }
  }

  if (url.match(/\/tasks\/\d+$/)) {
    const id = parseInt(url.split('/').pop());
    if (!id || !tasks[id]) {
      reject(`There is no task with id ${id}`);
      return;
    }
    switch (opts.method) {
      case 'POST':
        if (tasks[id].closed === false) {
          const updatedTask = {
            ...tasks[id],
            closed: true
          };
          tasks[id] = updatedTask;
          const responseJson = { task: updatedTask};
          resolve({ ok: true, json: () => responseJson });
        } else {
          reject('Already closed');
        }
        return;
      case 'DELETE':
        delete tasks[id];
        resolve({ ok: true });
        return;
    }
  }
};
