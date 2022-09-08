export default function getBoolean() {
  const randomNumber = Math.round(Math.random());
  const randomBoolean = randomNumber ? true : false;
  return new Promise((resolve, reject) => {
    if (randomBoolean !== true && randomBoolean !== false) {
      reject(new Error("El booleano no se ha generado correctamente"));
    }
    setTimeout(() => {
      resolve(randomBoolean);
    }, 1000);
  });
}
