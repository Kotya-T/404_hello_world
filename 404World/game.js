var game = new Chess();

// CPU�ץ쥤�䡼�ΰ�ư����
var makeCPUmove = function() {

    // CPU��ư�������������ѿ�������
    var cpuMoves = game.moves();

    // ��ư���������������1������
    var randomNum = Math.floor(Math.random() * cpuMoves.length);

    // ������ν�λȽ��
    if (cpuMoves.length === 0) {
        alert('�����ཪλ');

        // �������ܡ��ɤ򸵤��᤹
        game.reset();
    }

    // ���򤷤����ض��ư����
    game.move(cpuMoves[randomNum]);

    // �������ܡ��ɤ�����򹹿�����
    board.position(game.fen());
};



// ����֤�����ν���
var onDrop = function(source, target) {

    // ��ΰ�ư�ѥ����������å�����
    var move = game.move({

        from: source, // ��ư���ΰ���
        to: target // ��ư��ΰ���

    });

    // ��ΰ�ư�����꤬����и��ΰ��֤��᤹
    if (move === null) return 'snapback';

    // CPU�ץ쥤�䡼�ΰ�ư������¹ԡ�
    // ���˥᡼�����򥹥ࡼ���ˤ��뤿�ᡢ
    // ���������ߥ󥰤򤺤餹
    window.setTimeout(makeCPUmove, 250);
};



// ���ꥪ�ץ����
var config = {

    draggable: true, // ���ޥ����ǰ�ư����
    position: 'start', // ��ν������
    onDrop: onDrop // ��ΰ�ư��Υ��٥�Ƚ���


};

// �������ܡ��ɤ�����
var board = ChessBoard('board', config);