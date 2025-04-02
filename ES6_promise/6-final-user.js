// eslint-disable-next-line
import signUpUser from "./4-user-promise.js";
// eslint-disable-next-line
import uploadPhoto from "./5-photo-reject";
export default async function handleProfileSignup(firstName, lastName, filename) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(filename);
  const result = await Promise.allSettled([p1, p2]);
  return result.toString();
}
