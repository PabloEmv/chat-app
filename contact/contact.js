let form = document.querySelector("form");

let fullname = document.querySelector("#name");
let name_error = document.querySelector("#name_error");
let phone = document.querySelector("#phone");
let phone_error = document.querySelector("#phone_error");
let rut = document.querySelector("#rut");
let rut_error = document.querySelector("#rut_error");
let email = document.querySelector("#email");
let email_error = document.querySelector("#email_error");
let message = document.querySelector("#message");
let message_error = document.querySelector("#message_error");
let allInputs = document.querySelectorAll("form input, form textarea");

//función de validación
const validationFunction = (input, condition, errorText, errorMessaje) => {
  input.addEventListener("blur", (e) => {
    if (condition) {
      errorText.innerHTML = errorMessaje;
      input.classList.remove("verified");
      input.classList.add("error");
    } else {
      errorText.innerHTML = "";
      input.classList.remove("error");
      input.classList.add("verified");
    }
  });
};

form.addEventListener("change", (e) => {
  validationFunction(
    fullname,
    fullname.value.length < 4,
    name_error,
    "El nombre completo debe tener al menos 3 caracteres"
  );
  validationFunction(
    phone,
    !/^\d{8}$/.test(phone.value),
    phone_error,
    "El teléfono debe tener 8 números"
  );
  validationFunction(
    rut,
    !/^\d{7,8}-[0-9kK]$/.test(rut.value),
    rut_error,
    "El RUT debe tener el formato 12345678-9"
  );
  validationFunction(
    email,
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
    email_error,
    "El correo electrónico debe tener un formato válido"
  );
  validationFunction(
    message,
    message.value.length < 10 || message.value.length > 200,
    message_error,
    "El mensaje debe tener al menos 10 caracteres y no mas de 200"
  );
});

// esto valida que los campos del formulario no tengan la clase error y que no estén vacíos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorBoolean = false;
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].classList.contains("error") || allInputs[i].value === "") {
      errorBoolean = true;
    }
  }
  if (errorBoolean === false) {
    form.submit();
  }
});
