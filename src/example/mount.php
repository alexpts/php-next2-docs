<?php

declare(strict_types=1);

use PTS\Next2\Extra\CompositionMicroApp;
use PTS\Next2\MicroApp;
use PTS\Psr7\Response\JsonResponse;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$psr7Request = new ServerRequest('GET', new Uri('/api/v1/users/'));
$app = new CompositionMicroApp;

$apiAppV1 = new MicroApp;
$apiAppV1->store->get('/users/', fn($ctx) => $ctx->response = new JsonResponse(['v1' => 'users']));

$apiAppV2 = new MicroApp;
$apiAppV2->store->get('/users/', fn($ctx) => $ctx->response = new JsonResponse(['v2' => 'users']));

$reuseApp = new MicroApp;
$reuseApp->store->get('/users/', fn($ctx) => $ctx->response = new JsonResponse(['reuse' => 'users']));

$app->mount($apiAppV1, '/api/v1')
    ->mount($apiAppV2, '/api/v2')
    ->mount($reuseApp); // merge layers without prefix to app

$psr7Resp = $app->handle($psr7Request);