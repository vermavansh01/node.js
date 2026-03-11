
      document.querySelector(".container").addEventListener("dblclick", (e) => {
        e.stopPropagation();
        alert("hey i am conatiner");
      });
      document.querySelector("#child").addEventListener("dblclick", (e) => {
        e.stopPropagation();
        alert("hey i am child");
      });
      document
        .querySelector(".grandchild")
        .addEventListener("dblclick", (e) => {
          e.stopPropagation();
          alert("hey i am grandchild");
        });
      function getRandomColor() {
        let val1 = Math.ceil(0 + Math.random() * 256);
        let val2 = Math.ceil(0 + Math.random() * 256);
        let val3 = Math.ceil(0 + Math.random() * 256);
        return `rgb(${val1}, ${val2}, ${val3})`;
      }
      let a= setInterval(() => {
        Document.querySelector("#child").style.background =getRandomColor
      }, 1000);
      console.log(a);
    //   let b = setTimeout(() => {
    //     document.getElementsByClassName(grandchild).style.background = getRandomColor
    //   }, 1000);
    //   console.log(b)