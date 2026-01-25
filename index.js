function tambahTugas() {

    let input = document.getElementById("todo-input");
    let teksTugas = input.value;

    if (teksTugas === "") {
        alert("Isi tugasnya dulu ya!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${teksTugas}
        <button class="hapus-btn" onclick="hapusTugas(this)">Hapus</button>`;

    
    document.getElementById("todo-list").appendChild(li);

    input.value = "";
}

function hapusTugas(elemen) {
    
    elemen.parentElement.remove();
}
