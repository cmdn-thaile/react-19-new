/* eslint-disable no-unused-vars */
export async function fetchPerson() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        name: 'John Doe',
      };
      resolve(response);
    }, 1500);
  });
}
