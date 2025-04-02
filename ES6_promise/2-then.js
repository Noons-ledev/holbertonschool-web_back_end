export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const result = { status: 200, body: 'success' };
      return result;
    })
    .catch(() => {
      const err = new Error();
      return err;
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
