let users = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', age: 28 },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example2.com', age: 34 },
    { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example2.com', age: 45 },
    { id: 4, name: 'Eva Davis', email: 'eva.davis@example.com', age: 37 },
    { id: 5, name: 'David Wilson', email: 'david.wilson@example.com', age: 23 },
    
];

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
};
const HTTP_MESSAGE = {
  NOT_FOUND_USER: 'Пользователь не найден',
  MISSING_FIELDS: 'Отсутствуют обязательные поля',
  CREATED_USER: 'Пользователь успешно добавлен',
};


const getAllUsers = (req, res) => {
  res.status(HTTP_STATUS.OK).json(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  user ? res.status(HTTP_STATUS.OK).json(user) : res.status(HTTP_STATUS.NOT_FOUND).json({message : HTTP_MESSAGE.NOT_FOUND_USER});
  
};

const addUser = (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({message : HTTP_MESSAGE.MISSING_FIELDS});
  }
  const newUser = { id: users.length+1, name, email, age };
  users.push(newUser);
  res.status(HTTP_STATUS.CREATED).json(HTTP_MESSAGE.CREATED_USER);
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const updates = req.body;
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex] };
    
    Object.keys(updates).forEach(key => {
      if (updatedUser.hasOwnProperty(key)) {
        updatedUser[key] = updates[key];
      }
    });
    
    users[userIndex] = updatedUser;
    res.status(HTTP_STATUS.OK).json(updatedUser);
  } else {
    res.status(HTTP_STATUS.NOT_FOUND).json({ message: HTTP_MESSAGE.NOT_FOUND_USER });
  }
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(HTTP_STATUS.NO_CONTENT).send();
  } else {
      res.status(HTTP_STATUS.NOT_FOUND).json({message : HTTP_MESSAGE.NOT_FOUND_USER});
  }
};

const getUsersOlderThan = (req, res) => {
  const age = parseInt(req.params.age);
  const filteredUsers = users.filter(user => user.age > age);
  res.status(HTTP_STATUS.OK).json(filteredUsers);
};

const getUsersByDomain = (req, res) => {
  const domain = req.params.domain;
  const filteredUsers = users.filter(user => user.email.split('@')[1] === domain);
  res.status(HTTP_STATUS.OK).json(filteredUsers);
};

const getUsersSortedByName = (req, res) => {
  const sortedUsers = users.slice().sort((a, b) => a.name.localeCompare(b.name));
  res.status(HTTP_STATUS.OK).json(sortedUsers);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getUsersOlderThan,
  getUsersByDomain,
  getUsersSortedByName,
};
