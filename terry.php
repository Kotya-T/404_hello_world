<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title></title>
    <script src="terry2.jsp"></script>
</head>

<body>

    <?php
    require_once 'terry2.php';

    echo greeting("ネコ", "good morning");
    echo greeting("キツネ", "good night");
    ?>
</body>