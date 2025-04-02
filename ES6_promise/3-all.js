// eslint-disable-next-line
import {uploadPhoto, createUser} from "./utils.js";
export default function handleProfileSignup() {
  const p = uploadPhoto();
  const p1 = createUser();
  Promise.all([p, p1])
    .then(([photo, user]) => {
      const result = `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(result);
    })
    .catch(() => {
      const err = 'Signup system offline';
      console.log(err);
    });
}
