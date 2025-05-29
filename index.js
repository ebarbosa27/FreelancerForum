/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === Functions ===

function randomGenJob() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * 180 + 20);

  return {
    name,
    occupation,
    rate,
  };
}

const freelancerLibrary = Array.from({ length: NUM_FREELANCERS }, randomGenJob);

function avgRate() {
  const totalRate = freelancerLibrary.reduce((sum, job) => {
    sum += job.rate;
    return sum;
  }, 0);

  return totalRate / freelancerLibrary.length;
}

const avgFreelancerRate = avgRate();

function freelancerItem(job) {
  const freelancerElement = document.createElement("tr");
  freelancerElement.className = "freelancerItem";

  const nameElement = document.createElement("th");
  nameElement.textContent = job.name;
  const occupationElement = document.createElement("td");
  occupationElement.textContent = job.occupation;
  const rateElement = document.createElement("td");
  rateElement.textContent = job.rate;

  freelancerElement.append(nameElement);
  freelancerElement.append(occupationElement);
  freelancerElement.append(rateElement);

  return freelancerElement;
}

function freelancerList(jobArray) {
  const freelancerContainer = document.createElement("tbody");
  freelancerContainer.className = "freelancerContainer";
  jobArray.forEach((job) => {
    freelancerContainer.append(freelancerItem(job));
  });
  return freelancerContainer;
}

function averageRateSubtitle() {
  const averageElement = document.createElement("h2");
  averageElement.textContent = `The average rate is ${avgFreelancerRate}.`;

  return averageElement;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <h2></h2>
    <table>
      <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Occupation</th>
        <th scope="col">Rate</th>
      </tr>
    </thead>
      <tbody id="freelancerContainer"></tbody>
    </table>
  `;
  $app.querySelector("#freelancerContainer").replaceWith(freelancerList(freelancerLibrary));
  $app.querySelector("h2").replaceWith(averageRateSubtitle());
}
render();
