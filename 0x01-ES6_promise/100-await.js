// Import the required functions
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo: photo,
      user: user
    };
  } catch (error) {
    return {
      photo: null,
      user: null
    };
  }
}
