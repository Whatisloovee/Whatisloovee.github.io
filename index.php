<?php
// Получение данных из формы
$name = $_POST['name'];
$сinema = $_POST['cinema'];
$row = $_POST['row'];
$seat = $_POST['seat'];
$date = $_POST['date'];
$time = $_POST['time'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Создание XML-документа
$xml = new DOMDocument('1.0', 'UTF-8');

// Создание корневого элемента
$root = $xml->createElement('ticket');
$xml->appendChild($root);

// Создание элементов для данных формы
$nameElement = $xml->createElement('name', $name);
$root->appendChild($nameElement);

$cinemaElement = $xml->createElement('cinema', $cinema);
$root->appendChild($cinemaElement);

$rowElement = $xml->createElement('row', $row);
$root->appendChild($rowElement);

$seatElement = $xml->createElement('seat', $seat);
$root->appendChild($seatElement);



// Сохранение XML в файл
$xml->formatOutput = true;
$xml->save('ticket.xml');

echo 'Заказ оформлен.';
?>