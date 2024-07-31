// Create a WeakMap to track query counts
const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
    if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
        throw new Error('Invalid endpoint format');
    }

    // Initialize query count for this endpoint
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }

    // Increment query count
    const queryCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, queryCount);

    // Check if query count exceeds the threshold
    if (queryCount >= 5) {
        throw new Error('Endpoint load is high');
    }

    // Perform API query logic here...
    // (Placeholder code)

    // Return the result of the API query
    return `Query successful for ${endpoint.name}`;
}
