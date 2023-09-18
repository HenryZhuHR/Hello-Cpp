import{_ as n,e as a}from"./app.2859fef2.js";const s={},e=a(`<h1 id="\u4E00\u4E9B\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u6280\u5DE7" aria-hidden="true">#</a> \u4E00\u4E9B\u6280\u5DE7</h1><h2 id="\u4F4D\u8FD0\u7B97\u5FEB\u901F\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u8FD0\u7B97\u5FEB\u901F\u8FD0\u7B97" aria-hidden="true">#</a> \u4F4D\u8FD0\u7B97\u5FEB\u901F\u8FD0\u7B97</h2><h3 id="\u5224\u65AD\u5947\u5076" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5947\u5076" aria-hidden="true">#</a> \u5224\u65AD\u5947\u5076</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token punctuation">(</span>num <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// 2: 0010 \u5076\u6570\u6700\u540E\u4E3A 0</span>
<span class="token punctuation">(</span>num <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment">// 3: 0011 \u5947\u6570\u6700\u540E\u4E3A 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4E58\u96642" tabindex="-1"><a class="header-anchor" href="#\u4E58\u96642" aria-hidden="true">#</a> \u4E58\u96642</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">// 0010</span>
a <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>     <span class="token comment">// 0001 a=1</span>
a <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>     <span class="token comment">// 0100 a=4</span>
a <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">// 1000 a=8</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u4EA4\u6362\u4E24\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6362\u4E24\u4E2A\u6570" aria-hidden="true">#</a> \u4EA4\u6362\u4E24\u4E2A\u6570</h3><p>\u5F02\u6216\u8FD0\u7B97 <code>^</code> \u7684\u4EA4\u6362\u6027</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">//\u4F4D\u4E0E\u64CD\u4F5C</span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">^=</span> b<span class="token punctuation">;</span> <span class="token comment">// a = (a^b);</span>
  b <span class="token operator">^=</span> a<span class="token punctuation">;</span> <span class="token comment">// b = b^(a^b) = (b^b)^a = a</span>
  a <span class="token operator">^=</span> b<span class="token punctuation">;</span> <span class="token comment">// a = (a^b)^a = (a^a)^b = b</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4EA4\u6362\u6B63\u8D1F" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6362\u6B63\u8D1F" aria-hidden="true">#</a> \u4EA4\u6362\u6B63\u8D1F</h3><p>\u4EA4\u6362\u7B26\u53F7\u5C06\u6B63\u6570\u53D8\u6210\u8D1F\u6570\uFF0C\u8D1F\u6570\u53D8\u6210\u6B63\u6570</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">reversal</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">~</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,12);function p(t,c){return e}var r=n(s,[["render",p],["__file","trick.html.vue"]]);export{r as default};
