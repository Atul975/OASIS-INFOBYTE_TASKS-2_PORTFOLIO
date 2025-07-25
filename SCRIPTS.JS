const projects = {
  1: {
    title: "Product Design 1",
    description: "Description for design 1. Tools used, process highlights, features."
  },
  2: {
    title: "Product Design 2",
    description: "Description for design 2. Highlights of your work, visuals, UX flow."
  },
  3: {
    title: "Product Design 3",
    description: "Description for design 3. Focus on prototype, user testing, polish."
  }
};

function openModal(id) {
  const data = projects[id];
  const body = document.getElementById("modal-body");
  body.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
  document.getElementById("modal").style.display = "flex";
}

function closeModal(e) {
  if (e.target.id === "modal" || e.target.className === "close")
    document.getElementById("modal").style.display = "none";
}

function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  alert(`Thanks, ${form.name.value}! Your message has been received.`);
  form.reset();
}
