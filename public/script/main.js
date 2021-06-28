import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')

const modaldesc = document.querySelector('.modal p')

const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.check')

checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.delete')

deleteButton.forEach(button => {
    button.addEventListener('click',event => handleClick(event, false))
})

function handleClick(event, check = true){

    event.preventDefault()

    const form = document.querySelector('.modal form')
    const roomId = document.querySelector('#room-id').dataset.id
    const slug = check ? 'check' : 'delete'
    const question= event.target.dataset.id
    
    form.setAttribute('action', `/question/${roomId}/${question}/${slug}`)

    modalTitle.innerHTML = check ? 'Marcar como lido' : 'Excluir essa pergunta';
    modaldesc.innerHTML = check ? 'Tem certeza que deseja marcar como lida essa pergunta?' : 'Tem certeza que deseja excluir essa pergunta?'
    modalButton.innerHTML = check ? 'Sim, Marcar como lida' : 'Sim, Excluir';
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}
