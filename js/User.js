//file ini digunakan untuk mengurus business logic
//file ini digunakan untuk mengelola data seperti create, read, update, etc

class User {
  //fungsi yg akan dijalankan pertama kali klo model User ini diimport ke halaman HTML (FUNCTION DEFAULT)
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    // return (window.location.href = "../signin.html");

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    //proses pemeriksaan data username pada localStorage
    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userExists) {
      //proses pengembalian data ke signIn.js controller
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        message: "Data Tidak Ditemukan",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
