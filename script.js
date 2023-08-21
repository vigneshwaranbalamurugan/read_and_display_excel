var input = document.getElementById('input');
input.addEventListener('change', function(){
	showLoadingOverlay();
  readXlsxFile(input.files[0]).then(function(data){
    var i = 0;
    var table = document.getElementById("data");
    table.innerHTML = "";
    data.map((row, index) => {
      if (i == 0){
        generateTableHead(table, data[0]); // Pass only the 0th index row
      }
      if (i > 0){
        generateTableRows(table, row);
      }
      i++;
    });
	   hideLoadingOverlay();
  });
});

function generateTableHead(table, data){
  let thead = table.createTHead();
  let row = thead.insertRow();
    row.id = "headerRow";
  for (let key of data){
	  if(key!==null){
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
	  }
	  else {
      let th = document.createElement('th');
      th.style.border = "none"; // Remove border for null values
      row.appendChild(th);
    }
  }
}

function generateTableRows(table, data) {
  let newRow = table.insertRow(-1);
  for (let key of data) {
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(key);
    newCell.appendChild(newText);
  }
}

$(document).ready(function(){
  $("#inputsearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#data tr").filter(function() {
	 if ($(this).attr("id") === "headerRow") {
        return false; // Keep the header row always visible
      }
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
	function showLoadingOverlay() {
  document.getElementById('loadingOverlay').style.display = 'flex';
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
  document.getElementById('loadingOverlay').style.display = 'none';
}
