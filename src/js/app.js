import ErrorRepository from "./errorRepository";

console.log("worked");

const allErrors = new ErrorRepository();

console.log(allErrors.translate(3));
