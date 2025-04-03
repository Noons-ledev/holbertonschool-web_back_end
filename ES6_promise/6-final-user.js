// eslint-disable-next-line
import signUpUser from "./4-user-promise.js";
// eslint-disable-next-line
import uploadPhoto from "./5-photo-reject";
export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fullfilled' ? result.value : result.reason.toString(),
    })));
}
