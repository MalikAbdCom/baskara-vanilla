import itemA from "./script/itemA.js";
import itemB from "./script/itemB.js";

const data = [
    { letter: "A", items: itemA  },
    { letter: "B", items: itemB  },
];

// Buat elemen tabel
const table = document.getElementById("table-kata")

data.forEach(entry => {
    // Buat elemen baris untuk huruf
    const letterRow = document.createElement("tr");
    const letterCell = document.createElement("th");
    letterCell.textContent = entry.letter;
    letterRow.appendChild(letterCell);
    table.appendChild(letterRow);

    console.log(entry)

    entry.items.forEach(item => {
        // Buat elemen baris untuk item
        const itemRow = document.createElement("tr");
        const itemCell = document.createElement("td");

        // buat elemen button
        const button = document.createElement("button");
        button.textContent = item.kata;
        button.setAttribute("data-kata-key", item.key);
        button.setAttribute("type", "button");

        /* styling button */
        button.style.width = "100%";
        button.style.textAlign = "left";
        button.style.padding = "2px 4px";

        itemCell.appendChild(button);
        itemRow.appendChild(itemCell);
        table.appendChild(itemRow);
    });
});

/* menerjemahkan dan menampilkannya di kolom makna */

const buttonToTranslate = document.querySelectorAll('[data-kata-key]')

buttonToTranslate.forEach((button)=>{
    button.addEventListener("click", e =>{
        // mendapatkan key untuk di cocokkan ke makna
        const dataKamusKey = e.currentTarget.getAttribute('data-kata-key')

        // mendapatkan kolom untuk menampilkan makna
        const maknaContainer = document.getElementById('kamus-makna')

        // mengisi maknaContainer dengan "artinya" berdasarkan "key"
        maknaContainer.textContent = "test"

        const filteredMakna = itemA.filter( item => {
            // console.log({itemKey : item.key, dataKamusKey})
            return item.key === dataKamusKey
        })

        maknaContainer.textContent = filteredMakna[0].artinya
    })
})