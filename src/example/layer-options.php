<?php

declare(strict_types=1);

use PTS\Next2\Context\ContextInterface;
use PTS\Next2\HttpMethodEnum;
use PTS\Next2\MicroApp;
use PTS\Psr7\Response\JsonResponse;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$psr7Request = new ServerRequest('GET', new Uri('/hello/alex/'));

$app = new MicroApp;

$app->store->use(function(ContextInterface $ctx) {
    $name = $ctx->getCurrentLayer()->uriParams['name'];
    $ctx->response = new JsonResponse(['message' => "Hello {$name}!"]);
}, [
    'path' => '/hello/{name}/',
    'name' => 'helloWorldAction',
    'priority' => 50,
    'methods' => [HttpMethodEnum::GET->name],
    'restrictions' => [
        'name' => '[a-zA-Z0-9]+'
    ]
]);

$psr7Response = $app->handle($psr7Request);