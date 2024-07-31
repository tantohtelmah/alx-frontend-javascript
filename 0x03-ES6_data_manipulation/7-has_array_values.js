export default function hasValuesFromArray(inputSet, inputArray) {
    for (const element of inputArray) {
        if (!inputSet.has(element)) {
            return false;
        }
    }
    return true;
}
