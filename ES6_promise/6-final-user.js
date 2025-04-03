// eslint-disable-next-line
import createUser from "./4-user-promise.js";
// eslint-disable-next-line
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([createUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
    }
    )));
}
