<?php 

$apiKey = "AIzaSyD0LkGYKCvH9lr_Rly81AHUgo5cmRoDwh4";
$endpoint = "https://api.gemini.ai/generative";

$requestData = [
    "prompt" => "Write a short story about a robot learning emotions.",
    "max_tokens" => 150,
    "temperature" => 0.7,
];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $apiKey",
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestData));

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    $decodedResponse = json_decode($response, true);
    print_r($decodedResponse);
}

curl_close($ch);
?>
