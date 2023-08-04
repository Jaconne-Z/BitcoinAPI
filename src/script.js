
const h2Valor = document.getElementById('h2Valor');
const bntConsulta = document.getElementById('btnConsulta');

const API = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

async function BTCconsulta(){
    const response = await API.get();
    console.log(response.data.ticker.high);
    lblBTC.innerHTML = response.data.ticker.high;
};

bntConsulta.onclick = ()=>{
    BTCconsulta();
};
      