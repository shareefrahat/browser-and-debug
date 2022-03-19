/* const getElementById = (id) => document.getElementById(id);
getElementById("error-text").style.display = "none";
getElementById("save-btn").addEventListener("click", function () {
  const productName = getElementById("product-name");
  const productPrice = getElementById("product-price");
  getElementById("error-text").style.display = "none";
  productName.value && productPrice.value
    ? localStorage.setItem(productName.value, productPrice.value)
    : (getElementById("error-text").style.display = "block");

  productName.value = "";
  productPrice.value = "";
});
 */

const getElementById = (id) => document.getElementById(id);
getElementById("error-text").style.display = "none";
const productName = getElementById("product-name");
const productPrice = getElementById("product-price");

getElementById("save-btn").addEventListener("click", function () {
  getElementById("error-text").style.display = "none";

  const phone = { phone: productName.value };
  const price = { price: productPrice.value };
  const products = Object.assign(phone, price);

  productName.value && productPrice.value
    ? localStorage.setItem("PhoneInfo", JSON.stringify(products))
    : (getElementById("error-text").style.display = "block");

  const getPhone = localStorage.getItem("PhoneInfo");
  const phoneInfo = JSON.parse(getPhone);
  getElementById("phone-output").innerHTML = `${phoneInfo.phone}`;
  getElementById("price-output").innerHTML = `${phoneInfo.price}`;

  productName.value = "";
  productPrice.value = "";
});

const getPhone = localStorage.getItem("PhoneInfo");
const phoneInfo = JSON.parse(getPhone);
getElementById("phone-output").innerHTML = `${phoneInfo.phone}`;
getElementById("price-output").innerHTML = `${phoneInfo.price}`;
