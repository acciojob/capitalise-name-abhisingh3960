document.addEventListener("DOMContentLoaded", function () {
            var inputField = document.getElementById("fname");

            inputField.addEventListener("blur", function () {
                inputField.value = inputField.value.toUpperCase();
            });
        });