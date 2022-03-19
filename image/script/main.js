const date = new Date();

const locale = date.toLocaleString();

document.querySelector('#middle').innerHTML = `${locale}`;
