<?php

declare(strict_types=1);

use PTS\Next2\Context\ContextInterface;
use PTS\Next2\MicroApp;
use PTS\Psr7\Response\JsonResponse;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$psr7Request = new ServerRequest('GET', new Uri('/'));

$app = new MicroApp;

$app->store->get('/', function(ContextInterface $ctx) {
    $ctx->response = new JsonResponse(['message' => 'Hello World!']);
});

$psr7Response = $app->handle($psr7Request); // psr-15 runner