// Create a WeakMap to track query counts
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Function to query the API
export function queryAPI(endpoint) {
    // Initialize query count for this endpoint
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }

    // Increment query count
    const queryCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, queryCount);

    // Check if query count exceeds the threshold
    if (queryCount >= 5) {
        throw new Error("Endpoint load is high");
    }

    // Perform API query (replace with actual implementation)
    // ...

    // Return API response (replace with actual response)
    return "API response";
}
