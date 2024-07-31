function updateUniqueItems(groceriesMap) {
    if (typeof groceriesMap !== 'object' || groceriesMap === null) {
        throw new Error('Cannot process');
    }

    const updatedMap = { ...groceriesMap };
    for (const item in updatedMap) {
        if (updatedMap[item] === 1) {
            updatedMap[item] = 100;
        }
    }

    return updatedMap;
}
