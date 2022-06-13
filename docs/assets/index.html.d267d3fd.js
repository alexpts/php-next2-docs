import{_ as l,r as e,o as i,c as r,a as s,d as a,w as t,b as n,e as o}from"./app.f76b6b22.js";const u={},k=s("h1",{id:"\u043A\u0430\u0442\u0430\u043B\u043E\u0433-\u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u043A\u0430\u0442\u0430\u043B\u043E\u0433-\u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432","aria-hidden":"true"},"#"),n(" \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432")],-1),d={class:"table-of-contents"},v=n("Hello World"),g=n("\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (mount)"),b=o(`<hr><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><p>\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 PSR-7 \u043D\u0430 <strong>Next2</strong> \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0442\u0430\u043A:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Next2<span class="token punctuation">\\</span>Context<span class="token punctuation">\\</span>ContextInterface</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Next2<span class="token punctuation">\\</span>MicroApp</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Psr7<span class="token punctuation">\\</span>Response<span class="token punctuation">\\</span>JsonResponse</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Psr7<span class="token punctuation">\\</span>ServerRequest</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Psr7<span class="token punctuation">\\</span>Uri</span><span class="token punctuation">;</span>

<span class="token keyword">require_once</span> <span class="token string single-quoted-string">&#39;../../../vendor/autoload.php&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$psr7Request</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerRequest</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Uri</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MicroApp</span><span class="token punctuation">;</span>

<span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token class-name type-declaration">ContextInterface</span> <span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token property">response</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsonResponse</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;message&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Hello World!&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$psr7Response</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token variable">$psr7Request</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// psr-15 runner</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438-mount" tabindex="-1"><a class="header-anchor" href="#\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438-mount" aria-hidden="true">#</a> \u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (mount)</h2>`,5),m=n("\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u0440\u0443\u0433 \u0432 \u0434\u0440\u0443\u0433\u0430 \u043E\u0431\u0440\u0430\u0437\u0443\u044F \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439. \u042D\u0442\u043E \u043B\u0435\u0433\u043A\u043E \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044F 20 \u0441\u0442\u0440\u043E\u0447\u043A\u0430\u043C\u0438 \u043A\u043E\u0434\u0430 (\u0441\u043C "),h={href:"https://github.com/alexpts/php-next2/blob/master/src/CompositionMicroApp.php#L15",target:"_blank",rel:"noopener noreferrer"},w=n("PTS\\Next\\2CompositionMicroApp"),_=n(");"),y=o(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Next2<span class="token punctuation">\\</span>Extra<span class="token punctuation">\\</span>CompositionMicroApp</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Next2<span class="token punctuation">\\</span>MicroApp</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Psr7<span class="token punctuation">\\</span>Response<span class="token punctuation">\\</span>JsonResponse</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Psr7<span class="token punctuation">\\</span>ServerRequest</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PTS<span class="token punctuation">\\</span>Psr7<span class="token punctuation">\\</span>Uri</span><span class="token punctuation">;</span>

<span class="token keyword">require_once</span> <span class="token string single-quoted-string">&#39;../../../vendor/autoload.php&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$psr7Request</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerRequest</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Uri</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/api/v1/users/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositionMicroApp</span><span class="token punctuation">;</span>

<span class="token variable">$apiAppV1</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MicroApp</span><span class="token punctuation">;</span>
<span class="token variable">$apiAppV1</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token property">response</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsonResponse</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;v1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$apiAppV2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MicroApp</span><span class="token punctuation">;</span>
<span class="token variable">$apiAppV2</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token property">response</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsonResponse</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;v2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$reuseApp</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MicroApp</span><span class="token punctuation">;</span>
<span class="token variable">$reuseApp</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$ctx</span><span class="token operator">-&gt;</span><span class="token property">response</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsonResponse</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;reuse&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token variable">$apiAppV1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;/api/v1&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token variable">$apiAppV2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;/api/v2&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token variable">$reuseApp</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// merge layers without prefix to app</span>

<span class="token variable">$psr7Resp</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token variable">$psr7Request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u0422\u0430\u043A\u043E\u0439 \u043F\u0440\u0438\u0435\u043C \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0442\u0434\u0435\u043B\u044F\u0442\u044C \u043A\u043E\u0434. \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043B\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F <code>apiV1</code> middleware, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u0430\u043E\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E.</p>`,2);function x(f,q){const p=e("RouterLink"),c=e("ExternalLinkIcon");return i(),r("div",null,[k,s("nav",d,[s("ul",null,[s("li",null,[a(p,{to:"#hello-world"},{default:t(()=>[v]),_:1})]),s("li",null,[a(p,{to:"#\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438-mount"},{default:t(()=>[g]),_:1})])])]),b,s("p",null,[m,s("a",h,[w,a(c)]),_]),y])}var R=l(u,[["render",x],["__file","index.html.vue"]]);export{R as default};
