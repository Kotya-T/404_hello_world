 // ���֥�����ɥ����֥�������
 var winObj6;

 // Terry�˥��åȤ��륳����Хå��ؿ� Terry¦�Ǿ���������˥����뤵���
 var callback = function completionNotice() {
     this.onConversationAcquisitionCompleted();
 };

 // StationLink���忮���٥��ȯ������Terry�����þ�����������
 function getTerryConversation(conversationId) {
     // ���֥�����ɥ��������Ƥ��ʤ����Terry������ɥ���OPEN����
     if ((!winObj6) || (winObj6.closed)) {
         winObj6 = window.open('https://prod010.terry-ai.com', '', 'top=0,left=0,height=400,width=520,resizable=yes, scrollbars=yes');
     }
     // ������Хå�����Ͽ
     winObj6.completionNoticeCallback = callback
     winObj6.location.href = `https://prod010.terry-ai.com/#/AutoResponseCorrect?conversation_id=${conversationId}`;
 }

 // ������Хå��ؿ�����ǸƤӽФ���� CCF¦�ο����Ԥ�
 function onConversationAcquisitionCompleted() {
     var processingStatus = winObj6.processingStatus;
     var cstmData = winObj6.cstmData;

     if (processingStatus == 9) {
         // ���顼���ο���
         alert("CCF��˥塼����ֲ�����ư���������ƥ� Terry�פ򳫤��Ƥ���������");
     } else {
         // CCF �Ǥο���
         // TerryϢ�Ȥ���������ǸܵҸ�����¹Ԥ���
         console.log(cstmData.cmnLcstmNo);
     }
 }