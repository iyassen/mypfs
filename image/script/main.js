const date = new Date();

const locale = date.toLocaleString();

document.querySelector('#middle').innerHTML = `${locale}`;

const ghorst = document.getElementById('');

// 画像を透明にする処理
const ghorstHide = () => {
  ghorst.style.opacity = 0; // 画像要素のopacityプロパティの値を0(透明)にする
};

// 画像を不透明にする処理
const ghorstAppear = () => {
  ghorst.style.opacity = 1; // 画像要素のopacityプロパティの値を1(不透明)にする
};
