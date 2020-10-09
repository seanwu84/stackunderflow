export const handleErrors = async (err) => {
  if (err.status >= 400 && err.status < 600) {
    const errorJSON = await err.json();
    const errorsContainer = document.querySelector(".errors-container");
    console.log(err.status)
    let errorsHtml = [
      `
        <div class="alert alert-danger">
            Something went wrong. Please try again.
        </div>
      `,
    ];
    const { errors } = errorJSON;
    if (errors && Array.isArray(errors)) {
      errorsHtml = errors.map(
        (message) => `
          <div class="alert alert-danger">
              ${message}
          </div>
        `
      );
    }
    errorsContainer.innerHTML = errorsHtml.join("");
  } else {
    alert(
      "Something went wrong. Please check your internet connection and try again!"
    );
  }
};

export const renderTemplate = async (fileName, inputObj) => {
  const templateResponse = await fetch(fileName);
  const template = await templateResponse.text();
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(inputObj);
};
