const fs = require('fs');
const DELETE_SUCCESS = {status: 'Success', statusText: 'File deleted'};
const BD_PATH = './mocks/users/users.json';
let users;

fs.readFile(BD_PATH, (err, data, ) => {
  if (err) {
    console.log(err);

    users = [];

    fs.writeFile(BD_PATH, JSON.stringify(users), console.log);

    return;
  }

  users = JSON.parse(data);

  console.log(users);
});

function getUsers() {
  return users;
};

function updateUsers(newUsers) {
  const promise = new Promise((resolve, reject) => {

    fs.writeFile(BD_PATH, JSON.stringify(newUsers), (err) => {
      if (err) {
        console.log(err);

        reject(err);

        return;
      }

      users = newUsers;

      resolve(users);
    });
  });

  return promise;
};

function deleteUsersFile() {
  return new Promise((resolve, reject) => {
    fs.unlink(BD_PATH, (err, data) => {
        if (err) {
            reject(err);
        }
        resolve();
    });
    
  });

};


deleteUsersFile().then(() => {
  console.log(DELETE_SUCCESS)
});
  
module.exports = {
  getUsers,
  updateUsers,
  deleteUsersFile
};