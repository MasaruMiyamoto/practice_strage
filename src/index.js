//画面表示用の処理
if (localStorage.getItem("loginParam")) {
  //ストレージ情報の取得
  const loginParam = JSON.parse(localStorage.getItem("loginParam"));

  //入力フォームにストレージの値を設定
  document.getElementById("userId").value = loginParam.userId;
  document.getElementById("password").value = loginParam.password;

  sessionStorage.clear();
}

//ログインボタン押下処理
document.getElementById("login").onclick = () => {
  //フォーム内容をストレージに格納
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  //オブジェクトの定義
  const loginParam = {
    userId: userId,
    password: password
  };

  localStorage.setItem("loginParam", JSON.stringify(loginParam));

  alert(userId);
  //画面を再読み込み
  window.location.reload();
};
