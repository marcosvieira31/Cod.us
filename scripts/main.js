const phone = document.getElementById('phone-number') // Seletor do campo de telefone

phone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
phone.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})/g, "($1) ")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    phone.value = valor // Insere o(s) valor(es) no campo
}