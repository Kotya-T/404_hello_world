<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script>
$(function(){
 // ����оݤ�video�����
 var video = $('#video01').get(0);
 // ư��κ���
 $('#play').click(function(){
  video.play();
 });
 // ư��ΰ�����
 $('#stop').click(function(){
  video.pause();
 });
 // ư���Ƭ�Ф���Ǥ�դ��äذ�ư��
 $('#atama').click(function(){
  video.currentTime = 0; // ���줿�äΰ��֤ذ�ư�����0�á�
 });
 // �����ߥ塼�ȡʥȥ��뼰��
 $('#mute').click(function(){
  video.muted = video.muted ? false : true;
 });
 //���̥��å�
 $('#vol-up').click(function(){
  if(video.volume <= 0.75){
     video.volume = video.volume + 0.25;
     $("#vol").text(video.volume);
  }
 });
 //���̥�����
 $('#vol-down').click(function(){
  video.volume = video.volume - 0.25;
  $("#vol").text(video.volume);
 });
 //����ɽ��
 $("#vol").text(video.volume);
});
</script>