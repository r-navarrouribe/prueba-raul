export default function getBoolean() {
  const randomNumber = Math.round(Math.random());
  const randomBoolean = randomNumber ? true : false;
  return new Promise((resolve, reject) => {
    if (randomBoolean !== true || false) {
      reject(new Error("No se ha generado el booleano."));
    }
    setTimeout(() => {
      resolve(randomBoolean);
    }, 1000);
  });
}
