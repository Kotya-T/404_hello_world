<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script>
$(function(){
 // 操作対象のvideoを指定
 var video = $('#video01').get(0);
 // 動画の再生
 $('#play').click(function(){
  video.play();
 });
 // 動画の一時停止
 $('#stop').click(function(){
  video.pause();
 });
 // 動画の頭出し（任意の秒へ移動）
 $('#atama').click(function(){
  video.currentTime = 0; // 入れた秒の位置へ移動（例は0秒）
 });
 // 音声ミュート（トグル式）
 $('#mute').click(function(){
  video.muted = video.muted ? false : true;
 });
 //音量アップ
 $('#vol-up').click(function(){
  if(video.volume <= 0.75){
     video.volume = video.volume + 0.25;
     $("#vol").text(video.volume);
  }
 });
 //音量ダウン
 $('#vol-down').click(function(){
  video.volume = video.volume - 0.25;
  $("#vol").text(video.volume);
 });
 //音量表示
 $("#vol").text(video.volume);
});
</script>