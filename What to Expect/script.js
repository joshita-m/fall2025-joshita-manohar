// Small UI behaviors (mobile nav toggle) + data for the page
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (btn && nav) {
    // aria-expanded for accessibility
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', (e) => {
      const nowOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
    });

    // Close nav when any link is clicked (helpful on mobile)
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      })
    );

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && e.target !== btn && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

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

  //: code the data should go in the html ://
  const container = document.getElementById("content-container");
  if (container) {
    infantData.forEach(item => {
      // outer row
      const row = document.createElement("div");
      row.className = "routine-row";

      // left label (SLEEP / FEEDING / PLAY / HYGIENE)
      const labelDiv = document.createElement("div");
      labelDiv.className = "routine-label";
      labelDiv.textContent = item.subtitle.toUpperCase();

      // right text
      const textDiv = document.createElement("div");
      textDiv.className = "routine-text";
      textDiv.textContent = item.description;

      // assemble
      row.appendChild(labelDiv);
      row.appendChild(textDiv);

      container.appendChild(row);
    });
  }
});
