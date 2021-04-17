// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === ('MIT License')) {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if (license === (Apache License 2.0)) {
    return `![GitHub license](https://img.shields.io/badge/license-Apache-brightgreen)`
  } else if ()


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("render lincense function")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Tests
  ${data.tests}

## Walk-through video
provide link here
`;
}

module.exports = generateMarkdown;
