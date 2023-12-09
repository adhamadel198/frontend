import axios from "axios";

export async function getUser({ username }) {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/user/${username}`
    );
    return { data };
  } catch (error) {
    return { error: "Password does not Match" };
  }
}

export async function authenitcate(username) {
  try {
    return await axios.post("http://localhost:3001/api/auth", { username });
  } catch (error) {
    return { error: "Username does not exist" };
  }
}

export async function registerUser(userData) {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/register",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error in registerUser:", error);

    throw error;
  }
}

export async function verifyLogin({ username, password }) {
  try {
    console.log("Before Login Request:", { username, password });

    const response = await axios.post(`http://localhost:3001/api/login`, {
      username,
      password,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return Promise.reject({ error: "Password Doesn't match" });
  }
}

export async function updateUser(userId, userData) {
  try {
    const data = await axios.put("http://localhost:3001/api/updateUser", {
      userId,
      ...userData,
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile...!" });
  }
}

export async function updateTopics(userId, topic) {
  try {
    console.log("topic", topic);

    const data = await axios.put("http://localhost:3001/api/updateTopics", {
      userId,
      topic,
    });

    return Promise.resolve({ data });
  } catch (error) {
    console.error("Error updating user topics:", error);
    return Promise.reject({ error: "Couldn't Update User Topics...!" });
  }
}