export const handleErrors = async (err, querySelection = ".errors-container") => {
  const errorJSON = await err.json();
  const errorsContainer = document.querySelector(querySelection);
  let errorsHtml = [`<p class="errorMessage">${errorJSON}</p>`];
  const { errors } = errorJSON;
  if (errors && Array.isArray(errors)) {
    errorsHtml = errors.map(message => `<p class="errorMessage">${message}</p>`);
  }
  errorsContainer.innerHTML = errorsHtml.join("");
};

export const renderTemplate = async (fileName, inputObj) => {
  const templateResponse = await fetch(fileName);
  const template = await templateResponse.text();
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(inputObj);
};