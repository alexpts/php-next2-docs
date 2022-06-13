<?php

declare(strict_types=1);

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use PTS\Next2\Context\Context;
use PTS\Next2\Layer\Layer;
use PTS\Next2\MicroApp;
use PTS\Next2\Runner\Psr7Runner;

class NextMiddleware implements MiddlewareInterface
{
    /** @var Layer[] */
    protected array $layers;
    protected Psr7Runner $runner;

    public function __construct(MicroApp $app)
    {
        $this->layers = $app->store->getLayers();
        $this->runner = new Psr7Runner;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $adapterLayer = new Layer(function(Context $ctx) use ($handler) {
            $response = $handler->handle($ctx->getRequest());
            $ctx->response = $response;
        });

        $layers = [...$this->layers, $adapterLayer];
        $this->runner->run($layers, $request);

        return $handler->handle($request);
    }
}