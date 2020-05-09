export default function pad(v) {
  let result = '';
  const amountFullfill = 10 - v.length;
  i = 0;
  while (i < amountFullfill) {
    result += '_';
    i++;
  }
  return result;
}
