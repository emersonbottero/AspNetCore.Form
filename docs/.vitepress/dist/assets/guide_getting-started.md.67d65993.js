import{_ as s,c as a,o as n,a as e}from"./app.e8f9afab.js";const u='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"}],"relativePath":"guide/getting-started.md"}',l={name:"guide/getting-started.md"},t=e(`<h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><ul><li>Install the package</li></ul><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">dotnet add package AspNetCore.Form --version 1.0.0</span></span>
<span class="line"></span></code></pre></div><ul><li>Add assembly entries to the service</li></ul><div class="language-csharp"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// startup.cs</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddFormEndpoint</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">assembly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre></div><ul><li>Use the service</li></ul><div class="language-csharp"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// startup.cs</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">useRouting</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//should be called only once and before</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">useFormEndpoint</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre></div><ul><li>Add attributes to any class or property to generate an schemas</li></ul>`,8),p=[t];function o(c,r,i,d,y,A){return n(),a("div",null,p)}var C=s(l,[["render",o]]);export{u as __pageData,C as default};
