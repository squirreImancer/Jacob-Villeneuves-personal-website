document.querySelectorAll('a').forEach(abilitysbar => {
    abilitysbar.addEventListener('onclick', () => {
        let op = 0
        if (op == 0) {
             op = 1
            abilitydropdown.style.display = 'none';
            alert("You have selected " + abilitysbar.innerHTML);
        }
        else {
                op = 0
                abilitydropdown.style.display = 'none';
        }
    });

});