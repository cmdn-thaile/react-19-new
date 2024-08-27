/* eslint-disable no-unused-vars */
export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));

  if (Math.random() > 0.5) {
    return message;
  } else {
    throw new Error('Failed to deliver message');
  }
}
