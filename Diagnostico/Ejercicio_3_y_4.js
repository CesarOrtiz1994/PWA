// Version: 1.0
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
    if (i > 8) {
      console.log("Mensaje de error");
    }
  }, 800);
}
