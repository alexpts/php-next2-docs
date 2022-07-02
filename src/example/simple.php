<?php

declare(strict_types=1);

use PTS\Next2\Context\Context;
use PTS\Next2\Context\ContextInterface;
use PTS\Next2\MicroApp;
use PTS\Psr7\Response\JsonResponse;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$microApp = new MicroApp;

// multiple handlers for a layer
$microApp->store->use([
    function(ContextInterface $ctx) {
        $ctx->in = 0;
        $ctx->out = 0;

        $ctx->in++;
        $ctx->next();
        $ctx->out++;
    },
    // ... any handlers as a middleware or router handler
    function(ContextInterface $ctx) {
        $ctx->in++;
        $ctx->next();
        $ctx->out++;
    },
]);

// with options
$microApp->store->use(function(ContextInterface $ctx): void {
    $ctx->in++;
    $ctx->next();
    $ctx->out++;
}, [
    'path' => '/.*',
    'method' => ['GET']
]);

// fast method GET
$microApp->store->get('/.*', function(Context $ctx): void {
    $ctx->in++;
    $ctx->response = new JsonResponse(['ok' => 1]);
    $ctx->out++;
});

$psr7Request = new ServerRequest('GET', new Uri('/'));
$psr7Response = $microApp->handle($psr7Request);

print_r($psr7Response);