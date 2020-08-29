obstacle = document.getElementsByClassName("obstacle");
//onmousemoveで当たり判定を作る
for(var i = 0; i < obstacle.length; i++){
  obstacle[i].onmousemove = () => {
    document.write('ゲームオーバー！');
  };
}
//隠しパスワード
const ran = Math.floor(Math.random() * 10000);
console.log(ran);
document.getElementById("secret").innerText = ran;

hint = document.getElementById("hint");
hint.onclick = () => {
  hint.innerText = ('パスワードを入力しよう');
};

//クリアの処理
var button = document.getElementById("button");
var pass = document.getElementById("pass");
button.onclick = () => {
  if(pass.value == ran){
    document.write('おめでとう！');
  }else if(pass.value == 'ねぎま'){
    // ねぎま=ねぎまは切らしてます
    hint.innerText = ('ねぎまは切らしてます');
  }else{
    hint.innerText = (pass.value + ' パスワードが違います...');
  }
}