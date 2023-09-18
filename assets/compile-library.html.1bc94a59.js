import{_ as a,e as n}from"./app.2859fef2.js";const s={},e=n(`<h1 id="cmake-\u7F16\u8BD1\u548C\u94FE\u63A5\u9759\u6001\u5E93\u548C\u52A8\u6001\u5E93" tabindex="-1"><a class="header-anchor" href="#cmake-\u7F16\u8BD1\u548C\u94FE\u63A5\u9759\u6001\u5E93\u548C\u52A8\u6001\u5E93" aria-hidden="true">#</a> CMake: \u7F16\u8BD1\u548C\u94FE\u63A5\u9759\u6001\u5E93\u548C\u52A8\u6001\u5E93</h1><ul><li><a href="#cmake-%E7%BC%96%E8%AF%91%E5%92%8C%E9%93%BE%E6%8E%A5%E9%9D%99%E6%80%81%E5%BA%93%E5%92%8C%E5%8A%A8%E6%80%81%E5%BA%93">CMake: \u7F16\u8BD1\u548C\u94FE\u63A5\u9759\u6001\u5E93\u548C\u52A8\u6001\u5E93</a><ul><li><a href="#%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84">\u9879\u76EE\u7ED3\u6784</a></li><li><a href="#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86">\u5DE5\u4F5C\u539F\u7406</a><ul><li><a href="#%E9%85%8D%E7%BD%AE%E9%A1%B9%E7%9B%AE">\u914D\u7F6E\u9879\u76EE</a></li><li><a href="#%E7%BC%96%E8%AF%91%E5%BA%93">\u7F16\u8BD1\u5E93</a></li></ul></li></ul></li></ul><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500include
\u2502  \u2514\u2500myClass.h
\u251C\u2500src
\u2502  \u251C\u2500CMakeLists.txt
\u2502  \u2514\u2500myClass.cpp
\u2514\u2500CMakeLists.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u5DE5\u4F5C\u539F\u7406</h2><h3 id="\u914D\u7F6E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE</h3><p>\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 <code>CMakeLists.txt</code> \u4E3A\u6574\u4E2A\u9879\u76EE\u505A\u4E00\u4E9B\u57FA\u672C\u914D\u7F6E\uFF0C\u5305\u62EC\u9879\u76EE\u6240\u9700CMake\u6700\u4F4E\u7248\u672C\u3001\u9879\u76EE\u540D\u79F0\u3001\u7F16\u8BD1\u5668\u7B49\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code><span class="token comment"># ./CMakeLists.txt</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.10</span><span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>Compile_Library<span class="token punctuation">)</span>
<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><blockquote><p><code>myClass.h</code> \u548C <code>myClass.cpp</code> \u968F\u4FBF\u5199\u4E00\u4E2A\u7C7B\u5C31\u884C</p></blockquote><h3 id="\u7F16\u8BD1\u5E93" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5E93" aria-hidden="true">#</a> \u7F16\u8BD1\u5E93</h3><p>\u5728 <code>src/CMakeLists.txt</code> \u4E2D\u6211\u4EEC\u7F16\u8BD1 <code>myClass</code> \u4E3A\u4E00\u4E2A\u5E93</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code><span class="token comment"># ./src/CMakeLists.txt</span>
<span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>.  myLib<span class="token punctuation">)</span>
<span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/include<span class="token punctuation">)</span>

<span class="token comment"># ------ dynamic-link-library ------</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib_shared <span class="token namespace">SHARED</span> <span class="token punctuation">\${</span>myLib<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>

<span class="token comment"># ------ static-link-library ------</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib <span class="token namespace">STATIC</span> <span class="token punctuation">\${</span>myLib<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/lib<span class="token punctuation">)</span>

<span class="token comment"># -- link other 3rd-party lib to this lib if need</span>
<span class="token comment"># target_link_libraries(myLib &lt;&gt;)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><p>\u5F53\u4EE3\u7801\u6709\u591A\u4E2A\u6E90\u4EE3\u7801\u4E4B\u540E\uFF0C\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u6211\u4EEC\u5C06\u5168\u90E8\u6E90\u4EE3\u7801\u6DFB\u52A0\u5230\u4E00\u4E2A\u53D8\u91CF\u4E0B\u3002\u4F8B\u5982\u5C06 <code>src</code> \u76EE\u5F55\u4E0B\u7684\u5168\u90E8\u6E90\u7801\u6DFB\u52A0\u5230\u53D8\u91CF <code>myLib</code>\u5185</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code><span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>.  myLib_src<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u540C\u65F6\u8BBE\u7F6E\u6E90\u7801\u6240\u5BF9\u5E94\u7684\u5934\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u4F7F\u5F97\u7F16\u8BD1\u7684\u65F6\u5019\u53EF\u4EE5\u6B63\u786E\u5730\u627E\u5230\u5934\u6587\u4EF6</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code><span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/include<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u7F16\u8BD1\u5E93\u4E86\uFF0C\u6211\u4EEC\u4EE5\u7F16\u8BD1\u52A8\u6001\u5E93\u4E3A\u4F8B</p><p>\u547D\u4EE4 <code>add_library(&lt;lib_name&gt; STATIC &lt;file&gt;.h &lt;file&gt;.cpp)</code> \u7528\u4E8E\u5C06\u6307\u5B9A\u7684\u6E90\u7801\u7F16\u8BD1\u6210\u5E93</p><ul><li><code>&lt;lib_name&gt;</code> \u662F\u751F\u6210\u7684\u5E93\u540D\uFF0C\u8BE5\u5E93\u540D\u53EF\u4EE5\u770B\u6210\u4E00\u4E2A\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u5176\u4ED6\u5730\u65B9\u901A\u8FC7\u5E93\u540D\u8FDB\u884C\u5F15\u7528</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>STATIC</code> \u53EF\u4EE5\u8BBE\u7F6E\u751F\u6210\u7684\u5E93\u7684\u7C7B\u578B <ul><li><strong>\u52A8\u6001\u5E93</strong>\u4E3A <code>SHARED</code></li><li><strong>\u9759\u6001\u5E93</strong>\u4E3A <code>STATIC</code></li></ul></li><li>\u5269\u4E0B\u7684\u53C2\u6570\u662F\u9700\u8981\u7F16\u8BD1\u8FDB\u5E93\u7684\u6E90\u7801</li></ul><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code><span class="token keyword">add_library</span><span class="token punctuation">(</span>myLib_shared <span class="token namespace">SHARED</span> <span class="token punctuation">\${</span>myLib_src<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5E76\u4E14\u6211\u4EEC\u8BBE\u7F6E\u5E93\u7684\u8F93\u51FA\u76EE\u5F55</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">LIBRARY_OUTPUT_PATH</span> <span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span>/bin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u5F53\u524D\u7684\u5E93\u8FD8\u4F7F\u7528\u4E86\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\uFF08\u4F8B\u5982OpenCV\uFF09\uFF0C\u9700\u8981\u94FE\u63A5\u5230\u5F53\u524D\u7684\u5E93\uFF0C\u9700\u8981\u901A\u8FC7 <code>target_link_libraries</code> \u94FE\u63A5\uFF1B\u5982\u679C\u94FE\u63A5\u591A\u4E2A\u5E93\uFF0C\u4EE5\u7A7A\u683C\u5206\u5F00\u5373\u53EF</p><div class="language-cmake ext-cmake line-numbers-mode"><pre class="language-cmake"><code><span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>myLib &lt;other_libaray<span class="token punctuation">&gt;</span> [&lt;other_libaray_2<span class="token punctuation">&gt;</span>]<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,26);function p(c,l){return e}var i=a(s,[["render",p],["__file","compile-library.html.vue"]]);export{i as default};
