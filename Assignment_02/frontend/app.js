async function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const response = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });
  const data = await response.json();
  console.log(data);
  alert(data.message)
}
