// Auto Date
window.onload = function(){
    document.getElementById("date").valueAsDate = new Date();
};


// Items List
const items = [
    "कॉलम पेटी",
    "जाॅक",
    "स्पॅन",
    "2x3 प्लेट",
    "9 इंच प्लेट",
    "कैची",
    "टूबा",
    "पायाड"
];


// Add Row
function addRow(){

    let body = document.getElementById("tableBody");

    let row = document.createElement("tr");

    let options = "";

    items.forEach(item=>{
        options += `<option>${item}</option>`;
    });


    row.innerHTML = `

        <td>
            <select>${options}</select>
        </td>

        <td>
            <input type="number" value="1" min="1" oninput="calculate()">
        </td>

        <td>
            <input type="number" value="0" min="0" oninput="calculate()">
        </td>

        <td class="rowTotal">0</td>

        <td>
            <button onclick="removeRow(this)">X</button>
        </td>

    `;

    body.appendChild(row);

    calculate();
}


// Remove Row
function removeRow(btn){

    btn.parentElement.parentElement.remove();

    calculate();
}


// Calculate Total
function calculate(){

    let rows = document.querySelectorAll("#tableBody tr");

    let grand = 0;

    rows.forEach(row=>{

        let qty = row.children[1].children[0].value;

        let rate = row.children[2].children[0].value;

        let total = qty * rate;

        row.querySelector(".rowTotal").innerText = total;

        grand += total;

    });

    document.getElementById("grandTotal").innerText = grand;

}


// Save Bill
function saveBill(){

    let bill = {

        नाव: name.value,
        मोबाईल: phone.value,
        तारीख: date.value,
        बिल: billno.value,
        हस्ते: holder.value,
        एकूण: grandTotal.innerText

    };

    let data = JSON.parse(localStorage.getItem("bills") || "[]");

    data.push(bill);

    localStorage.setItem("bills", JSON.stringify(data));

    alert("बिल सेव्ह झाले आहे!");
}


// First Row
addRow();

