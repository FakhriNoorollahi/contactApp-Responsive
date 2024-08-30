function validateEmailInput(emailInput) {
  const emailRegex = /^[a-zA-Z0-9._]{3,25}@\w{2,6}\.[a-z]{2,3}$/g;
  if (emailRegex.test(emailInput)) {
    return true;
  } else {
    return false;
  }
}

function validateNameInput(name) {
  return name.length >= 8 ? true : false;
}

export function checkEmailAndName(nameVal, emailVal) {
  const validatEmail = validateEmailInput(emailVal);
  const validatName = validateNameInput(nameVal);
  if (!nameVal && !emailVal) {
    return {
      name: { isTrue: true, message: "must fill" },
      email: { isTrue: true, message: "must fill" },
    };
  } else if (!nameVal) {
    const message = validatEmail ? "" : "not valid";
    return {
      name: { isTrue: true, message: "must fill" },
      email: { isTrue: !validatEmail, message },
    };
  } else if (!emailVal) {
    const message = validatName ? "" : "not valid";
    return {
      email: { isTrue: true, message: "must fill" },
      name: { isTrue: !validatName, message },
    };
  } else {
    if (!validatEmail && !validatName)
      return {
        name: { isTrue: true, message: "not valid" },
        email: { isTrue: true, message: "not valid" },
      };
    if (!validatEmail && validatName)
      return {
        name: { isTrue: false, message: "" },
        email: { isTrue: !validatEmail, message: "not valid" },
      };
    if (validatEmail && !validatName)
      return {
        email: { isTrue: false, message: "" },
        name: { isTrue: !validatName, message: "not valid" },
      };
    if (validatEmail && validatName)
      return {
        email: { isTrue: false, message: "" },
        name: { isTrue: false, message: "" },
      };
  }
}
