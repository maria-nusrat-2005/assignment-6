const cart = [];
const addToCart = (id, name, price) => {
  const item = {
    id,
    name,
    price,
  };
  cart.push(item);
  console.log(cart);
  showItemsInCart();
};

const removeItem = (id) => {
  const index = cart.findIndex((item) => item.id === id);
  console.log(id, index);
  if (index !== -1) {
    cart.splice(index, 1);
    showItemsInCart();
  }
};
const showItemsInCart = () => {
  const cartContainer = document.getElementById("item-container");
  cartContainer.innerHTML = "";

  let total = 0;
  for (let item of cart) {
    total += item.price;
  }
  console.log("Total:", total);

  document.getElementById("price").innerText = total;

  for (let item of cart) {
    const div = document.createElement("div");

    div.innerHTML = `<div
                id="item"
                class="bg-green-100  flex items-center justify-between p-4  rounded-xl"
              >
                <div>
                  <h4>${item.name}</h4>
                  <p class="text-gray-400">৳ ${item.price} x 1</p>
                </div>
                <p onclick="removeItem('${item.id}')" class=" class="text-gray-600 cursor-pointer">x</p>
              </div>`;
    cartContainer.appendChild(div);
  }
};
