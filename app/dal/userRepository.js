import fs from "fs/promises"; // Using promises version of fs

const USERS_FILE_PATH = "./data.JSON";

const readUsersFromFile = async () => {
  const data = await fs.readFile(USERS_FILE_PATH, "utf8");
  return JSON.parse(data);
};


const writeUsersToFile = async (users) => {
    const updatedDataJSON = JSON.stringify(users);
    await fs.writeFile(USERS_FILE_PATH, updatedDataJSON, "utf8");
  };

  

const getAllUsers = async () => {
    const users = await readUsersFromFile();
    return users;
  };
  


const createUser = async (user) => {
    const users = await readUsersFromFile();    
    users.push(user);
    await writeUsersToFile(users);
  
    return user;
  };

const getUser = async (userId) => {
  const users = await readUsersFromFile();
  return users.find((user) => user.id == userId);
};


const updateUser = async (userId, updatedUser) => {
  const users = await readUsersFromFile();
  const userIndex = users.findIndex((user) => user.id == userId);

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  await writeUsersToFile(users);

  return users[userIndex];
};

const deleteUser = async (userId) => {
  const users = await readUsersFromFile();
  const userIndex = users.findIndex((user) => user.id == userId);

  if (userIndex === -1) {
    return null;
  }

  const deletedUser = users.splice(userIndex, 1)[0];
  await writeUsersToFile(users);

  return deletedUser;
};


const updateAmount = async (userId, updatedUser) => {
    try {
      const users = await readUsersFromFile();
      const userIndex = users.findIndex((user) => user.id === userId);
  
      if (userIndex === -1) {
        throw new Error('User not found');
      }
  
      const updatedUserFields = {
        quantity: updatedUser.quantity,
      };
  
      users[userIndex] = { ...users[userIndex], ...updatedUserFields };
      await writeUsersToFile(users);
  
      return users[userIndex];

    } catch (error) {
      throw new Error('Failed to update user');
    }
  };
  

export default {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  updateAmount,
  
};