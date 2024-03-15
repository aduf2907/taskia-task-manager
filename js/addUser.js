//file ini untuk penghubung antara UI HTML dan model User
//semacam controller

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User(); //import yg ada di model User

  userForm.addEventListener("submit", (e) => {
    e.preventDefault(); //biar pas di browser gak balik ke atas

    //lempar data ke model User
    const userData = {
      username: document.getElementById("username").value,
    };

    userManager.saveUser(userData);

    const result = userManager.saveUser(userData);

    if (result.success) {
      return (window.location.href = "../signin.html");
    } else {
      console.log("Proses Simpan Data Gagal!");
    }
  });
});
