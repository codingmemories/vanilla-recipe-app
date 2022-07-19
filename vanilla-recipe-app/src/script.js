function buyLasagne() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let emoji = prompt("What is your favorite emoji?");

  if (name.length > 0 && email.length > 0 && emoji.length > 0) {
    alert(
      `Thanks, ${name} ${emoji}, we will be in touch. Meanwhile, have a lot of Lasagne!`
    );
  } else {
    alert(`Sorry, no name, no Lasagne!`);
  }
}

let buttonBuy = document.querySelector(".section-recipe__button");
buttonBuy.addEventListener("click", buyLasagne);
