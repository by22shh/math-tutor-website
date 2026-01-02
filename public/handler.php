<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON"]);
        exit;
    }

    $name = $data["name"] ?? "";
    $phone = $data["phone"] ?? "";
    $email = $data["email"] ?? "";
    $message = $data["message"] ?? "";

    if (empty($name) || empty($phone) || empty($message)) {
        http_response_code(400);
        echo json_encode(["error" => "Имя, телефон и сообщение обязательны"]);
        exit;
    }

    $token = "TELEGRAM_BOT_TOKEN_PLACEHOLDER";
    $chatId = "TELEGRAM_CHAT_ID_PLACEHOLDER";

    $formattedMessage = "🔔 Новая заявка на занятие!\n\n";
    $formattedMessage .= "👤 Имя: " . $name . "\n";
    $formattedMessage .= "📞 Телефон: " . $phone . "\n";
    if (!empty($email)) {
        $formattedMessage .= "📧 Email: " . $email . "\n";
    }
    $formattedMessage .= "💬 Сообщение: " . $message . "\n\n";
    $formattedMessage .= "Время: " . date("d.m.Y H:i:s");

    $url = "https://api.telegram.org/bot" . $token . "/sendMessage";
    $postData = [
        "chat_id" => $chatId,
        "text" => $formattedMessage,
        "parse_mode" => "HTML"
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        echo json_encode(["message" => "Заявка успешно отправлена"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Ошибка при отправке в Telegram"]);
    }
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
?>
