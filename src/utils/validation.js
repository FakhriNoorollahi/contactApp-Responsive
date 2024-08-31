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

export function checkEmail(emailVal) {
  if (!emailVal) {
    return { isTrue: true, message: "Please fill in this field" };
  } else {
    const validatEmail = validateEmailInput(emailVal);
    const message = validatEmail ? "" : "Email is not valid";
    return { isTrue: !validatEmail, message };
  }
}

export function checkName(nameVal) {
  if (!nameVal) {
    return { isTrue: true, message: "Please fill in this field" };
  } else {
    const validatName = validateNameInput(nameVal);
    const message = validatName ? "" : "Name is not valid";
    return { isTrue: !validatName, message };
  }
}
