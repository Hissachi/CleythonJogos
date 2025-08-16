<?php

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (file_exists(__DIR__ . $path)) {
    return false; // Serve o arquivo solicitado
}

// Todas as requisições vão para index.php
$_SERVER['SCRIPT_NAME'] = '/index.php';
include __DIR__ . '/index.php';