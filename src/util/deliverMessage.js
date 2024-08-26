/* eslint-disable no-unused-vars */
export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));

  // Simulate 50% chance of success and 50% chance of error
  if (Math.random() > 0.5) {
    return message; // Success
  } else {
    throw new Error('Failed to deliver message'); // Simulated error
  }
}
