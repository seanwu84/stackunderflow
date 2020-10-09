export const renderTemplate = async (fileName, inputObj) => {
  const templateResponse = await fetch(fileName);
  const template = await templateResponse.text();
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(inputObj);
};
