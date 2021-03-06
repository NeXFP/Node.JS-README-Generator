// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `https://img.shields.io/badge/License-MIT-yellow`
  } else if (license === "APACHE 2.0") {
    return `https://img.shields.io/badge/License-Apache%202.0-yellow`
  } else if (license === "GPL 3.0") {
    return `https://img.shields.io/badge/License-GPL%203.0-yellow`
  } else {
    return "https://img.shields.io/badge/License-NONE-yellow";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license === "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === "GPL 3.0") {
    return `https://opensource.org/licenses/GPL-3.0`
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None"){
    return `## License
  ${license} License <br />
  Link to License's Website: ${renderLicenseLink(license)}
    
  ## Badges
  ![${license}](${renderLicenseBadge(license)})`
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ${renderLicenseSection(data.licensing)}

  ## Questions
  For any questions, email me at: ${data.email}.
  Or find me at Github https://github.com/${data.username}.

`;
}

module.exports = generateMarkdown;
