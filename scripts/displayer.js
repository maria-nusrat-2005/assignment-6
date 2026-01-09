const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#";
    a.innerText = category.category_name;
    a.className = "hover:bg-green-600 hover:text-white px-3 py-2 rounded";

    a.addEventListener("click", (e) => {
      e.preventDefault();

      document
        .querySelectorAll("#category-container a")
        .forEach((el) => el.classList.remove("bg-green-600", "text-white"));
      a.classList.add("bg-green-600", "text-white");

      loadTreesByCatagory(category.id);
    });

    li.appendChild(a);
    categoryContainer.appendChild(li);
  });
};

const displayTrees = (trees) => {
  document.getElementById("tree-container").innerHTML = "";

  // const displayTreeContainer = document.getElementById()
  for (const tree of trees) {
    // console.log(tree);
    const treeContainer = document.getElementById("tree-container");

    const div = document.createElement("div");
    div.innerHTML = `<div class="card bg-base-100 max-w-96 p-3 shadow-sm  flex flex-col">
  <figure class="h-60 w-full overflow-hidden">
    <img 
      src="${tree.image}" 
      alt="trees" 
      class="w-full h-full object-cover rounded-xl" 
    />
  </figure>
  <div class="space-y-2 p-3 flex-1 flex flex-col justify-between">
    <div>
      <h2 onclick=" loadTreeDetail(${tree.id})" class="text-xl font-semibold">${
      tree.name
    }</h2>
      <p>${tree.description.slice(0, 80)}</p>
    </div>
    <div class="space-y-2">
      <div class="flex justify-between items-center">
        <button class="btn bg-green-200 rounded-full px-4 py-2 text-green-500">
          ${tree.category}
        </button>
        <p class="font-bold text-xl"><span>৳</span>${tree.price}</p>
      </div>
      <button 
        onclick="addToCart('${tree.id}', '${tree.name}', ${tree.price || 500})"
        class="btn w-full bg-green-700 text-white">
        Add to cart
      </button>
    </div>
  </div>
</div>
`;
    treeContainer.appendChild(div);
  }
};

const displayTreeModal = (plant) => {
  document.getElementById("plant_detail_container").innerHTML = "";
  console.log(plant);
  console.log(plant.name);

  document.getElementById("plant_detail_modal").showModal();
  const treeDetailContainer = document.createElement("div");

  treeDetailContainer.innerHTML = `  <h3 class="text-lg font-bold">${plant.name}</h3>
        <p class="py-4">${plant.description}</p>`;
  document.getElementById("plant_detail_container").append(treeDetailContainer);
};
