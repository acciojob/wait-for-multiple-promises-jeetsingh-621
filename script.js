document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("output");

  const loadingRow = document.createElement("tr");
	loadingRow.id = "loading"; 
  const loadingCell = document.createElement("td");

  loadingCell.colSpan = 2;
  loadingCell.textContent = "Loading...";
  loadingRow.appendChild(loadingCell);
  tableBody.appendChild(loadingRow);

  const promise1 = () => {
    return new Promise((resolve) => {
      const time = Math.random() * 2 + 1; 
		setTimeout(() => resolve({ name: "Promise 1", time }), time * 1000);
    });
  };

  const promise2 = () => {
    return new Promise((resolve) => {
      const time = Math.random() * 2 + 1; 
      setTimeout(() => resolve({ name: "Promise 2", time }), time * 1000);
    });
  };

  const promise3 = () => {
    return new Promise((resolve) => {
      const time = Math.random() * 2 + 1; 
      setTimeout(() => resolve({ name: "Promise 3", time }), time * 1000);
    });
  };

  const startTime = performance.now();

  Promise.all([promise1(), promise2(), promise3()]).then((results) => {
    tableBody.innerHTML = "";

    results.forEach((result) => {
      const row = document.createElement("tr");
		row.id = "loading"; 
      const nameCell = document.createElement("td");
      const timeCell = document.createElement("td");

      nameCell.textContent = result.name;
      timeCell.textContent = result.time.toFixed(3); 
      row.appendChild(nameCell);
      row.appendChild(timeCell);
      tableBody.appendChild(row);
    });

    const totalTime = (performance.now() - startTime) / 1000;

    const totalRow = document.createElement("tr");
	  totalRow.id = "loading"; 
    const totalNameCell = document.createElement("td");
    const totalTimeCell = document.createElement("td");

    totalNameCell.textContent = "Total";
    totalTimeCell.textContent = totalTime.toFixed(3);

    totalRow.appendChild(totalNameCell);
    totalRow.appendChild(totalTimeCell);
    tableBody.appendChild(totalRow);
  });
});

