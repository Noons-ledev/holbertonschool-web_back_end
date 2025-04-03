// eslint-disable-next-line
import signUpUser from "./4-user-promise.js";
// eslint-disable-next-line
import uploadPhoto from "./5-photo-reject";
export default function handleProfileSignup(firstName, lastName, filename) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(filename);
  return Promise.allSettled([p1, p2])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fullfilled' ? result.value : result.reason.toString(),
    })));
}
