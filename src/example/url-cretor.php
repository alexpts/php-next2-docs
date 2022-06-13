<?php

declare(strict_types=1);

use PTS\Next2\Extra\UrlCreator;
use PTS\Next2\MicroApp;
use PTS\Psr7\Response\JsonResponse;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$psr7Request = new ServerRequest('GET', new Uri('/users/34/'));
$app = new MicroApp;
$urlCreator = new UrlCreator($app);

$app->store->get('/users/{id}/', function($ctx) use ($urlCreator) {
    $link = $urlCreator->url('usersAction', ['id' => 4]);
    $ctx->response = new JsonResponse(['link' => $link]);
}, ['name' => 'usersAction']);

$psr7Resp = $app->handle($psr7Request);