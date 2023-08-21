import { error } from "console";
import fs from "fs/promises";

const USERS_FILE_PATH = "./users/usersData.json";

const readUsersFromFile = async () => {
  const data = await fs.readFile(USERS_FILE_PATH, "utf8");
  return JSON.parse(data);
};


const writeUsersToFile = async (users) => {
  const updatedDataJSON = JSON.stringify(users);
  await fs.writeFile(USERS_FILE_PATH, updatedDataJSON, "utf8");
};







const createUser = async (user) => {
  const users = await readUsersFromFile();
  user.id = v4();
  users.push(user);
  await writeUsersToFile(users);
  return user;
};




const getUser = async (userId) => {
  const users = await readUsersFromFile();
  const remail = isAdmin2.email
  const resetpassword = isAdmin2.password
  const findUser = users.find((user) => user.email == remail);
  const Email = users.find((user) => user.password == resetpassword)
  const userIndex = users.findIndex((user) => user.email == remail);

  if (users[userIndex].isAdmin || Email  &&  findUser) {
    return users.find((user) => user.id == userId);
  } else{ 
    throw new Error("User authentication failed");
  }
};




const getAllUsers = async (isAdmin2) => {
  const users = await readUsersFromFile();
  const remail = isAdmin2.email
  const resetpassword = isAdmin2.password
  const findUser = users.find((user) => user.email == remail);
  const Email = users.find((user) => user.password == resetpassword)
  const userIndex = users.findIndex((user) => user.email == remail);

  if (users[userIndex].isAdmin && Email && findUser) {
    return users;
  } else{ 
    throw new Error("User authentication failed");
  }

};




const updateUser = async (userId, updatedUser) => {
  const users = await readUsersFromFile();
  const userIndex = users.findIndex((user) => user.id == userId);

  if (userIndex === -1) {
    return null;
  }

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


export default {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
};



// const createUser = async (newUser, userId) => {
//   const users = await readUsersFromFile();
//   const existingUser = users.find((user) => user.id === userId);

//   if (!existingUser) {
//     users.push(newUser);
//     await writeUsersToFile(users);
//     return newUser;
//   } else {
//     throw new Error("User already exists");
//   }
// };



// const getUser = async (userId) => {
//   const users = await readUsersFromFile();
//   return users.find((user) => user.id == userId);
// };



// const getAllUsers = async () => {
//   const users = await readUsersFromFile();
//   return users;
// };









// export default {
//   createUser,
//   getUser
// };