<?php

declare(strict_types=1);

use PTS\Next2\Context\ContextInterface;
use PTS\Next2\MicroApp;
use PTS\Psr7\Response\JsonResponse;
use PTS\Psr7\ServerRequest;
use PTS\Psr7\Uri;

require_once '../../../vendor/autoload.php';

$microApp = new MicroApp;
$rateLimiterHandlerForAction = function() {}; // some callable

$microApp->store->get('/users/{uid}/', [
    // validateHandler
    function(ContextInterface $ctx) {
        $userId = (int)$ctx->getUriParams()['uid']; // 47

        if ($userId < 1) {
            $badResponse = new JsonResponse(['error' => 'userid is not positive number'], 400);
            $ctx->setResponse($badResponse);
            return;
        }

        $ctx->currentUserId = $userId;
        $ctx->next();
    },

    // check rate limiter
    $rateLimiterHandlerForAction,

    // any callable handlers

    // init/prefetch data
    function(ContextInterface $ctx) {
        // $ctx->currentUser = fetchUserById($ctx->currentUserId); // fetch user db or some logic
        $ctx->next();
    },

    // action/controller
    function(ContextInterface $ctx) {
        $response = new JsonResponse(['hello' => $ctx->currentUser->__toString()]);
        $ctx->setResponse($response);
    }
]);

$psr7Request = new ServerRequest('GET', new Uri('/user/47/'));
$psr7Response = $microApp->handle($psr7Request);
