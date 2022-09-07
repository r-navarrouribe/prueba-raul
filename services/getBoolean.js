export default function getBoolean() {
  const randomNumber = Math.round(Math.random());
  const randomBoolean = randomNumber ? true : false;
  return randomBoolean;
}
