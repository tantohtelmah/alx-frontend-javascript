// Assuming the functions in utils.js return promises and are imported as follows:
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Collect all promises
  const promises = [
    uploadPhoto(),
	createUser()
  ];

  // Use Promise.all to collectively resolve all promises
  return Promise.all(promises)
    .then(results => {
      const [profile, name] = results;
      console.log(`${profile.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
