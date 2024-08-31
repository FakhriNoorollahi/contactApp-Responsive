function validateEmailInput(emailInput) {
  const emailRegex = /^[a-zA-Z0-9._]{3,25}@\w{2,6}\.[a-z]{2,3}$/g;
  if (emailRegex.test(emailInput)) {
    return true;
  } else {
    return false;
  }
}

function validateNameInput(nameInput) {
  const nameRegex = /^[a-zA-Z0-9._(u0600-\u06FF) ]{7,}\S/g;
  if (nameRegex.test(nameInput)) {
    return true;
  } else {
    return false;
  }
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
    const message = validatName ? "" : "It must have at least 8 characters";
    return { isTrue: !validatName, message };
  }
}
