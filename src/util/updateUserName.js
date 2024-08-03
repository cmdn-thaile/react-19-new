/* eslint-disable no-unused-vars */
export async function updateUserName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful response
      const response = {
        name,
      };
      resolve(response);

      const error = new Error('Get user error');
      reject(error);
    }, 1500);
  });
}
