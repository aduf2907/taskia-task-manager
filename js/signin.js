document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User(); //import yg ada di model User

  userForm.addEventListener("submit", (e) => {
    e.preventDefault(); //biar pas di browser gak balik ke atas

    //lempar data ke model User
    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      alert("Success Login!");
      //   return (window.location.href = "../signin.html");
    } else {
      console.log(result.message);
    }
  });
});
