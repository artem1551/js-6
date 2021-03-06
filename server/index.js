const express = require('express');
const bodyParser = require('body-parser');

const UsersService = require('./Users.service.js');
const logService = require('./log.service');
const UsersData = require('./Users.data')

const app = express();
const port = 7090;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));


app.all('*', logService.logMiddleware);

app.get('/users', UsersService.getUsers);

app.get('/users/all', UsersService.getUsersAll);
app.get('/users/:usersName/', UsersService.getUsersByName);
app.get('/users/:usersName/', UsersService.getUsersByName);

app.post('/users/add', UsersService.addUser);
app.put('/users/update', UsersService.updateUserById);
app.get('/get/log', logService.getLog)
app.delete('/user/remove', UsersService.deleteUserById);


app.listen(port, () => {
  logService.startLog();
  console.log(`Example app listening at http://localhost:${port}`)
});




// const promise = new Promise((success, negative) => { //success - resolve, negative - reject
//   const result = friend.GiveMeMoney(); // status = PENDING
//
//   if (result === true) {
//     success(result);
//   } else {
//     negative(result);
//   }
// });
//
// promise
//     .then((result) => {
//       return me.BuyPS5();
//     })
//     .catch((err) => {
//       if (err === 'NO OTHER OPTIONS') {
//         console.log(err);
//
//         return Promise.reject(err);
//       }
//
//       return anotherFriend.GiveMoney();
//     })
//     .then((result) => {
//       me.BuyPS4();
//
//       return 'SUCCESS';
//     })
//     .catch((err) => {
//       if (err === 'NO OTHER OPTIONS') {
//         console.log(err);
//
//         return Promise.reject(err);
//       }
//     });
//
//
// promiseUser
//     .then((userData) => {
//       return userData.name;
//     })
//     .catch((errorUserData) => {})
//     .then((name) => {
//       globalUser.name = name;
//
//       return updateGlobalUserName(name).then().catch();
//     })
//     .then((resultUpdateGlobalUserName) => {
//       someActionsWithResult(resultUpdateGlobalUserName);
//     })
//     .catch((globalErrorForUpperPromises) => {})