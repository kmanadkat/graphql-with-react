const getErrorMessage = (errorStr) => {
  const regex = /Unexpected error value: "(.*)"/;
  return errorStr.match(regex)[1];
}

export {
  getErrorMessage
}