// For this portion of your pet store I'm going to provide a template of the JavaScript to display your images from an array. It's going to be your job to fill in the missing portions to get those images displayed to the page. Each item inside of your array should have at least three keys to access. They're going to be title, image, and price.
// https://github.com/rmtkable/petStoreChallengeJS

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

//  The third person who visit MY store’s landing page each day should receive a message that they have won a $50 gift card
let visitorCount = 0;
function checkNumbersOfVisitors() {
  visitorCount++;

  if (visitorCount === 3) {
    alert("Hey Congratulations!, you are the winner of $50 gift card");
  }
}
console.log("Total Visitors: " + visitorCount);

// 10. Your contact page should have a form to submit a message, on submit the page should console.log the person’s message, and e-mail address

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
});

// Adoption certificate using JS
const showButton = document.getElementById("showContent");
const hiddenContent = document.getElementById("hiddenContent");

showButton.addEventListener("click", function () {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    showButton.textContent = "Hide Certificate";
  } else {
    hiddenContent.style.display = "none";
    showButton.textContent = "Show Certificate";
  }
});

// carousel in homepage using JS
const images = document.querySelectorAll("#imageSlider img");
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}
setInterval(showNextImage, 1000); // Slide every 3 seconds
// Initially show the first image
showImage(currentImageIndex);
