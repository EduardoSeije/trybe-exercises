const clearAllBtn = document.querySelector("#clearAll")
const completeName = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#documentCPF');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const cargo = document.querySelector('#job');
const cargoDesc = document.querySelector('#job-description');
const dataInicio = document.querySelector('#start-date');
const state = document.getElementById('state');

function createStates() {
    const state = document.getElementById('state');
    const stateList = [
        'AC - Acre',
        'AL - Alagoas',
        'AP - Amapá',
        'AM - Amazonas',
        'BA - Bahia',
        'CE - Ceará',
        'DF - Distrito Federal',
        'ES - Espírito Santo',
        'GO - Goías',
        'MA - Maranhão',
        'MT - Mato Grosso',
        'MS - Mato Grosso do Sul',
        'MG - Minas Gerais',
        'PA - Pará',
        'PB - Paraíba',
        'PR - Paraná',
        'PE - Pernambuco',
        'PI - Piauí',
        'RJ - Rio de Janeiro',
        'RN - Rio Grande do Norte',
        'RS - Rio Grande do Sul',
        'RO - Rondônia',
        'RR - Roraíma',
        'SC - Santa Catarina',
        'SP - São Paulo',
        'SE - Sergipe',
        'TO - Tocantins'
    ];
    
    for (let index = 0; index < stateList.length; index += 1) {
        let newState = document.createElement('option');
        newState.innerText = stateList[index];
        state.appendChild(newState);
    }
    return state
}
createStates();

function completeInfo() {
    let form = document.querySelector('form');
    let data = Object.fromEntries(new FormData(form).entries()); // Source - https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery
    let info = document.createElement('div');
    info.className = ('informacao-completa');
    info.innerText = data;
    document.querySelector('body').appendChild(info);
    console.log(info);
}
const submitBtn = document.querySelector('#send');
submitBtn.addEventListener('click', completeInfo);

function clearAll() {
    document.location.reload();
}
clearAllBtn.addEventListener('click', clearAllBtn);
