obstacle = document.getElementsByClassName("obstacle");
//onmousemoveで当たり判定を作る
for(var i = 0; i < obstacle.length; i++){
  obstacle[i].onmousemove = () => {
    document.write('ゲームオーバー！');
  };
}


finish = document.getElementById("finish");
//クリアの処理
finish.onclick = () => {
  document.write('おめでとう！');
};