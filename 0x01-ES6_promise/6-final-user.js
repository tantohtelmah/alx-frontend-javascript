// Import the required functions
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Define the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the functions and handle the promises
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for all promises to settle
  return Promise.allSettled([signUpPromise, uploadPromise])
    .then(results => {
      // Map the results to the desired structure
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
}
