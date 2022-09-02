function replace() {
  let change = 0;
  return function () {
    if (change == 0) {
      change = change + 1;
      return (document.body.style.background = "red");
    }
    if (change == 1) {
      change = change - 1;
      return (document.body.style.background = "");
    }
  };
}

const counter = replace();
