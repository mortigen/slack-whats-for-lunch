export const to = promise =>
  promise
    .then(data => {
      return [null, data];
    })
    .catch(err => [err]);

export default to;
