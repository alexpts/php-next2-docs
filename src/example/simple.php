<?php

declare(strict_types=1);

use PTS\Next2\Context\ContextInterface;
use PTS\Next2\HttpMethodEnum;
use PTS\Next2\MicroApp;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$microApp = new MicroApp;

// multiple handlers for a layer
$microApp->store->use([
    function(ContextInterface $ctx, callable $next) {
        $ctx->in = 0;
        $ctx->out = 0;

        $ctx->in++;
        $next();
        $ctx->out++;
    },
    // ... any handlers as a middleware or router handler
    function(ContextInterface $ctx, callable $next) {
        $ctx->in++;
        $next();
        $ctx->out++;
    },
]);

// with options
$microApp->store->use(function(ContextInterface $ctx, callable $next): void {
    $ctx->in++;
    $next();
    $ctx->out++;
}, [
    'path' => '/.*',
    'method' => [HttpMethodEnum::GET->name]
]);

// fast method GET
$microApp->store->get('/.*', function(ContextInterface $ctx): void {
    $ctx->in++;
    $ctx->out++;
});

$psr7Request = new ServerRequest('GET', new Uri('/'));
$psr7Response = $microApp->handle($psr7Request);

print_r($psr7Response);