let button = document.querySelector("button")
button.addEventListener("click", mc)


function mc(){
  let kg = document.querySelector("#kg").value
  let size = document.querySelector("#size").value
  let result = document.querySelector("#result")

  calc = kg / (Math.pow(size, 2))

  result.textContent = calc
}