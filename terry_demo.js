 // サブウインドウオブジェクト
 var winObj6;

 // Terryにセットするコールバック関数 Terry側で情報取得時にコールされる
 var callback = function completionNotice() {
     this.onConversationAcquisitionCompleted();
 };

 // StationLinkの着信イベント発生時にTerryより会話情報を取得する
 function getTerryConversation(conversationId) {
     // サブウインドウが開いていない場合TerryウィンドウをOPENする
     if ((!winObj6) || (winObj6.closed)) {
         winObj6 = window.open('https://prod010.terry-ai.com', '', 'top=0,left=0,height=400,width=520,resizable=yes, scrollbars=yes');
     }
     // コールバックの登録
     winObj6.completionNoticeCallback = callback
     winObj6.location.href = `https://prod010.terry-ai.com/#/AutoResponseCorrect?conversation_id=${conversationId}`;
 }

 // コールバック関数の中で呼び出される CCF側の振舞を行う
 function onConversationAcquisitionCompleted() {
     var processingStatus = winObj6.processingStatus;
     var cstmData = winObj6.cstmData;

     if (processingStatus == 9) {
         // エラー時の振舞い
         alert("CCFメニューから「音声自動応答システム Terry」を開いてください。");
     } else {
         // CCF での振舞い
         // Terry連携で得た情報で顧客検索を実行する
         console.log(cstmData.cmnLcstmNo);
     }
 }