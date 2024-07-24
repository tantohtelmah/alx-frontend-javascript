export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
	  // Simulate an asynchronous operation (e.g., API call)
	  setTimeout(() => {
		const success = true; // Simulate success or failure
		if (success) {
		  resolve("true");
		} else {
		  reject("false");
		}
	  }, 1000); // Simulate a 1-second delay
	});
  }
