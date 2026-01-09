const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCategories(data.categories);
    });
};

loadCategories();
const loadTrees = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      displayTrees(data.plants);
    });
};

setTimeout(() => {
  loadTrees();
}, 2000);

const loadTreesByCatagory = (id) => {
  document
    .getElementById("loadAllTreesbtn")
    .classList.replace("bg-white", "text-black", "text-5xl");
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.plants);
      displayTrees(data.plants);
    });
};

const loadTreeDetail = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayTreeModal(data.plants);
      console.log(data.plants);
    });
};
//loadTreeDetail(2);

// const manageSpinner = (status) => {
//   if (status == true) {
//     document.getElementById("spinner").classList.remove("hidden");
//     document.getElementById("tree-container").classList.add("hidden");
//   } else {
//     document.getElementById("tree-container").classList.remove("hidden");
//     document.getElementById("spinner").classList.add("hidden");
//   }
// };
