const  { getUsers: getUsersData, updateUsers } = require('./Users.data');

const getUsers = (req, res) => {
    const users = getUsersData();
    // console.log('users', users);
    let usersData = users;

    // if (req.query.type == 'last') {
    // if (req.query.type === 'last') {
    if (req.query.type === 'last') {
        usersData = users.slice(-1);
    };

    if (req.query.type === 'first') {
        usersData = users.slice(0, 1);
    };

    res.send(usersData);
};

const getUsersByName = (req, res) => {
    const users = getUsersData();
    // if (req.params.usersName == 'all') {
    //     getUsersAll(req, res);

    //     return;
    // }
    const filtredNames = users.filter(name => name.toLowerCase() === req.params.usersName.toLowerCase());
    res.send(filtredNames);
};

const getUsersAll = (req, res) => {
    const users = getUsersData();

    const filtredNames = users.filter(name => name);
    res.send(filtredNames);
};

const addUser = (req, res) => {
    const { user } = req.body;
    const users = getUsersData();

    const updatedData = [...users, user];

    updateUsers(updatedData)
        .then(() => res.send(updatedData));
};

const updateUserById = (req, res) => {
    const { id, name } = req.body;

    const users = [...getUsersData()];

    users[id] = name;

    updateUsers(users).then(() => {
        res.send(users);
    }).catch((err) => {
        res.status(500).send(err);
    });
};


// setTimeout(() => {
//     const users = getUsersData();

    // const newArray = [...users];
    //
    // users[10] = {
    //     ...users[10],
    //     name: 'sidufhgsjkhdf'
    // };
    //
    // Object.assign({}, users[10], {name: 'sidufhgsjkhdf'})

//     updateUsers([...users, 'newUser']);
// }, 10000);

module.exports = {
    getUsers,
    getUsersByName,
    getUsersAll,
    addUser,
    updateUserById,
};