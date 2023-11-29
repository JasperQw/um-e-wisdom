import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { decodeJWT } from "./jwt_helper";

export async function hash(password: string) {
  try {
    const saltRounds = 10;
    const generatedSalt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, generatedSalt);
    return hash;
  } catch (err) {
    console.log(err);
  }
}

export async function compareHashes(password: string, hash: string) {
  try {
    return await bcrypt.compare(password, hash);
  } catch (err) {
    console.log(err);
  }
}

export async function getUserDataFromCookie() {
  try {
    const cookie = cookies().get("token");
    let user_data;
    if (cookie) {
      user_data = await decodeJWT(cookie?.value);
    } else {
      throw Error("Cookie not found!");
    }

    return user_data;
  } catch (err) {
    console.log(err);
  }
}
