//: the data for the page ://

const infantData = [
  {
    subtitle: "Sleep",
    description: "Maintain consistent sleep and nap times, with toddlers needing 11–14 hours of sleep in a 24-hour period."
  },
  {
    subtitle: "Feeding",
    description: "Offer a variety of healthy foods, but allow the child to decide how much they eat."
  },
  {
    subtitle: "Play",
    description: "Engage in active play like going for walks, and provide opportunities for creative play with crayons or finger paint."
  },
  {
    subtitle: "Hygiene",
    description: "Establish a steady bedtime routine that includes putting on pajamas."
  }
];

//: code the data should go in the html  ://
const container = document.getElementById("content-container");

//: add the data to the page ://

infantData.forEach(item => {
  const div = document.createElement("div");
  const subtitle = document.createElement("h3");
  const description = document.createElement("p");

  subtitle.textContent = item.subtitle;
  description.textContent = item.description;

  div.appendChild(subtitle);
  div.appendChild(description);

  container.appendChild(div);
});