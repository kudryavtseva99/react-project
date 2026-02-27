export const required = (value) => (value ? undefined : "Field is required");

export const maxLengthCreator = (maxLength) => (value) => {
  const v = value ?? "";
  return v.length > maxLength
    ? `Max length is ${maxLength} symbols`
    : undefined;
};
