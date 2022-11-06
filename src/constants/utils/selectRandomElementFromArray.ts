export default function selectRandomElementFromArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}
