<?php

declare(strict_types=1);

use PTS\Next2\Context\ContextInterface;
use PTS\Next2\MicroApp;
use PTS\Psr7\Response\JsonResponse;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$psr7Request = new ServerRequest('GET', new Uri('/users/35/'));
$app = new MicroApp;

$app->store->get('/users/{id}/', function(ContextInterface $ctx) {
    $params = $ctx->getUriParams();
    $ctx->response = new JsonResponse([
        'id' => $params['id']
    ]);
});

$psr7Resp = $app->handle($psr7Request);