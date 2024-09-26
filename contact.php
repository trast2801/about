<? 

if (isset($_POST['senderName'])) {$senderName = $_POST['senderName'];}
if (isset($_POST['subject'])) {$subject = $_POST['subject'];}
if (isset($_POST['senderEmail'])) {$senderEmail = $_POST['senderEmail'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}


$senderName = stripslashes($senderName);

$senderName = htmlspecialchars($senderName);

$subject = stripslashes($subject);

$subject = htmlspecialchars($subject);


$senderEmail = stripslashes($senderEmail);

$message = stripslashes($message);


$senderEmail = htmlspecialchars($senderEmail);

$message = htmlspecialchars($message);






$address = "kirilenkoartem13@ya.ru"; // ВАШ АДРЕС

$message = "Имя: ".$senderName."\nМой контактный e-mail: ".$senderEmail."\nУслуга: ".$subject."\nСообщение: ".$message."";

$verify = mail($address,$subject,$message,"Content-type:text/plain; Charset=utf-8\r\n");


if ($verify == 'true')
{
echo "
 <div style='text-align:center;'>Ваша заявка принята. Наши менеджеры свяжутся с Вами в ближайшее время.</div>
";
}
else 
{
echo "
 <div align='center'>ОШИБКА!!!</div>
 <div align='center'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
";
}
?>