const toggle = document.getElementById("toggle")
const theme = window.localStorage.getItem("theme")


/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */
if (theme === "dark") 
document.body.classList.add("dark")//adiciona o tema dark ao body
// event listener para quando o botão de alterar o tema for mudado
toggle.addEventListener("change", () => { 
  document.body.classList.toggle("dark") 
  //  adiciona ou remove uma classe CSS de um determinado elemento
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light")
  } else window.localStorage.setItem("theme", "dark")
});

  




