function isOfAge(value) {
  console.log(value)
  if ((Date.now() - value) >= (18 * 31556952000)){
    console.log(Date.parse(value))
    return true;
  } else {
    return false;
  }
}


console.log(isOfAge(new Date("01/23/2000")))