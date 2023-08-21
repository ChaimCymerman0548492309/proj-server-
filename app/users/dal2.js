import fs from "fs/promises"; // Using promises version of fs

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
  users.push(user);
  await writeUsersToFile(users);

  return user;
};


const getUser = async (userId) => {
  const users = await readUsersFromFile();
  return users.find((user) => user.id == userId);
};


export default {
  createUser,
  getUser
};