export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return "Field is required";
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
  const v = value ?? "";
  return v.length > maxLength
    ? `Max length is ${maxLength} symbols`
    : undefined;
};
