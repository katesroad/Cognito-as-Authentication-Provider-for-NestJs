import { Auth } from "aws-amplify";

export async function signUp(userData) {
  const { email, password, ...attributes } = userData;
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes,
    });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

export async function signIn(userData) {
  const { email, password, ...attributes } = userData;
  try {
    const data = await Auth.signIn({
      username: email,
      password,
      attributes,
    });
    console.log(data.signInUserSession);
  } catch (e) {
    console.log(e);
  }
}

// Doing sign out globally revokes all the tokens, including access token and refresh token
export async function signOut(global = false) {
  try {
    Auth.signOut({ global });
  } catch (e) {
    console.log(e);
  }
}
