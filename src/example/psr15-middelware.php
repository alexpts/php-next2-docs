<?php

declare(strict_types=1);

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use PTS\Next2\Adapter\Psr7RunnerAdapter;
use PTS\Next2\Context\ContextInterface;
use PTS\Next2\Layer\Layer;
use PTS\Next2\MicroApp;

class NextMiddleware implements MiddlewareInterface
{
    /** @var Layer[] */
    protected array $layers;
    protected Psr7RunnerAdapter $runner;

    public function __construct(MicroApp $app)
    {
        $this->layers = $app->store->getLayers();
        $this->runner = new Psr7RunnerAdapter;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $callable = function(ContextInterface $ctx) use ($handler) {
            $response = $handler->handle($ctx->getRequest());
            $ctx->setResponse($response);
        };

        $adapterLayer = new Layer([$callable]);

        $layers = [...$this->layers, $adapterLayer];
        $this->runner->run($layers, $request);

        return $handler->handle($request);
    }
}