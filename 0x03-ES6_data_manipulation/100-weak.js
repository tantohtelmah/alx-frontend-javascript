// Create a WeakMap to track query counts for each endpoint
const weakMap = new WeakMap();

// Define the queryAPI function
export default function queryAPI(endpoint) {
  // Initialize query count for the endpoint (if not already set)
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count
  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  // Check if query count exceeds the threshold
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Perform API query logic here (not shown in this snippet)
  // ...

  // Return the result of the API query
  // ...
}
