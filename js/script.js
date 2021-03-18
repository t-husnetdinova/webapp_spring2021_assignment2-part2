//Get the button:
mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const app = Vue.createApp({
  data() {
    return {
      componentKey: 0
    }
  },
  methods: {}
})

function updateSecurityQuestion1View() {
  // grab the elements by id
  var security1 = document.getElementById("security1");
  var divSecurity1 = document.getElementById("divSecurity1");

  // if yes is selected
  if(security1.value != "1") {
    divSecurity1.classList.remove("invisible");
  }
  // no error, make it nice again
  // if they change their mind
  else {
    divSecurity1.classList.add("invisible");
  }
}

function updateSecurityQuestion2View() {
  // grab the elements by id
  var security2 = document.getElementById("security2");
  var divSecurity2 = document.getElementById("divSecurity2");

  // if yes is selected
  if(security2.value != "0") {
    divSecurity2.classList.remove("invisible");
  }
  // no error, make it nice again
  // if they change their mind
  else {
    divSecurity2.classList.add("invisible");
  }
}

function updateSecurityQuestion3View() {
  // grab the elements by id
  var security3 = document.getElementById("security3");
  var divSecurity3 = document.getElementById("divSecurity3");

  // if yes is selected
  if(security3.value != "0") {
    divSecurity3.classList.remove("invisible");
  }
  // no error, make it nice again
  // if they change their mind
  else {
    divSecurity3.classList.add("invisible");
  }
}
