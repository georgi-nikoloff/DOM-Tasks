function solve() {
   let searchBtn = document.getElementById("searchBtn");
   let inputField = document.getElementById("searchField");
   let allRows = Array.from(document.querySelectorAll('tbody tr'));
   searchBtn.addEventListener('click', () => {
      let pattern = new RegExp(inputField.value, 'gim');
      allRows.map(row => {
         row.classList.remove('select');
         if (row.textContent.match(pattern) !== null) {
            row.setAttribute("class", "select")
         }
      });
      inputField.value = '';
   });
}
