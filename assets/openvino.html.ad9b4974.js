import{_ as s,e as n}from"./app.2859fef2.js";const e={},a=n(`<h2 id="linux-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#linux-\u7F16\u8BD1" aria-hidden="true">#</a> Linux \u7F16\u8BD1</h2><p>clone \u6E90\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://github.com/openvinotoolkit/openvino.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>clone \u5B50\u6A21\u5757</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> openvino
<span class="token comment"># from Github</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>
<span class="token comment"># from Gitee</span>
<span class="token function">bash</span> ./scripts/submodule_update_with_gitee.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B89\u88C5\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./install_build_dependencies.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,7);function i(l,p){return a}var r=s(e,[["render",i],["__file","openvino.html.vue"]]);export{r as default};
