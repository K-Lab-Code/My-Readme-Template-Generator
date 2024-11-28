// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache license 2.0":
      return 'License-Apache_2.0-blue.svg';
      break;
    case "Boost Software License 1.0":
      return 'License-Boost_1.0-lightblue.svg';
      break;
    case "MIT":
      return 'License-MIT-yellow.svg';
      break;
    case "Mozilla Public License 2.0":
      return 'License-MPL_2.0-brightgreen.svg';
      break;
    case "The Unlicense":
      return 'license-Unlicense-blue.svg';
      break;
    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache license 2.0":
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case "Boost Software License 1.0":
      return 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case "MIT":
      return 'https://opensource.org/licenses/MIT';
      break;
    case "Mozilla Public License 2.0":
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case "The Unlicense":
      return 'http://unlicense.org/';
      break;
    default: return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache license 2.0":
      return 'Apache license 2.0';
      break;
    case "Boost Software License 1.0":
      return "Boost Software License 1.0";
      break;
    case "MIT":
      return 'MIT License';
      break;
    case "Mozilla Public License 2.0":
      return 'Mozilla Public License 2.0';
      break;
    case "The Unlicense":
      return 'The Unlicense';
      break;
    default: return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${(renderLicenseBadge(data.license) === "")? '':`[![License](https://img.shields.io/badge/${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})`}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
- [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contribution}

## License

${(renderLicenseSection(data.license) === "")? 'This project is currently unlicensed.':`This application us covered under the ${renderLicenseSection(data.license)}.`}
 
## Questions

If you want to contact me with further questions here is my contact info:
- [${data.username}](https://github.com/${data.username})
- [${data.email}](mailto:${data.email})

## Tests

${data.test}`;
}

export default generateMarkdown;
