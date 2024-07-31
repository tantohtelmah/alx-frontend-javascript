export default function cleanSet(inputSet, startString) {
    const matchingValues = Array.from(inputSet).filter(value => value.startsWith(startString));
    return matchingValues.join(' ');
}
