const count = document.getElementById("count");
      function increment() {
        count.innerText = Number(count.innerText) + 1;
      }
      function decrement() {
        if (Number(count.innerText) > 0) {
          count.innerText = Number(count.innerText) - 1;
        } else {
          alert("Counter is not going beyond 0");
        }
      }