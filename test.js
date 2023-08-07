var products = [
  {
    title: "Cat Chew Set",
    image: "./images/product page/JSimages/catChewToys.jpg",
    price: "$19.99",
    description:
      "A bundle of assorted chew toys for your beloved cat to play with.",
  },
  {
    title: "Cat Grooming Brush",
    image: "./images/product page/JSimages/catanddog gromming set.webp",
    price: "$9.99",
    description: "A gentle grooming brush to keep your cat looking fabulous.",
  },
  {
    title: "Dog Chew Toys Set",
    image: "./images/product page/JSimages/Dogchewing set.jpeg",
    price: "$16.99",
    description: "A set of durable chew toys to keep your dog entertained.",
  },
];

var postHTML = " ";

for (var i = 0; i < products.length; i++) {
  var heading =
    '<div class="product ' + i + '"><span><h5>' + products[i].title + "</h5>";
  var image = '<img src="' + products[i].image + '" class="jsImages"/>';
  var price = "<p> $" + products[i].price + "</p></span>";
  var description =
    '<div class=""><p>' +
    products[i].description +
    '</p> <button type="button" class="btn btn-warning"> add to cart</button></div></div>';
  var concatThis = heading + image + price + description;
  postHTML = postHTML + concatThis;
}
document.getElementById("jsProducts").innerHTML = postHTML;
