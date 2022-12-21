import{_ as s,c as e,o as n,e as a}from"./app.b38b9bf5.js";const h=JSON.parse('{"title":"VSCode 設置","description":"","frontmatter":{},"headers":[{"level":2,"title":"安裝 Extension","slug":"安裝-extension","link":"#安裝-extension","children":[{"level":3,"title":"安裝套件的方式：","slug":"安裝套件的方式","link":"#安裝套件的方式","children":[]},{"level":3,"title":"工作坊懶人包","slug":"工作坊懶人包","link":"#工作坊懶人包","children":[]}]},{"level":2,"title":"設置 settings.json","slug":"設置-settings-json","link":"#設置-settings-json","children":[]},{"level":2,"title":"同步帳號的擴充功能與設置","slug":"同步帳號的擴充功能與設置","link":"#同步帳號的擴充功能與設置","children":[]}],"relativePath":"workshop/env/vscode.md"}'),t={name:"workshop/env/vscode.md"},l=a(`<h1 id="vscode-設置" tabindex="-1">VSCode 設置 <a class="header-anchor" href="#vscode-設置" aria-hidden="true">#</a></h1><h2 id="安裝-extension" tabindex="-1">安裝 Extension <a class="header-anchor" href="#安裝-extension" aria-hidden="true">#</a></h2><h3 id="安裝套件的方式" tabindex="-1">安裝套件的方式： <a class="header-anchor" href="#安裝套件的方式" aria-hidden="true">#</a></h3><ul><li>在 VSCode 裡面 <code>ctrl-shift-x</code> 搜尋安裝。</li><li>從 <a href="https://marketplace.visualstudio.com/" target="_blank" rel="noreferrer">Marketplace</a> 搜尋安裝。</li></ul><h3 id="工作坊懶人包" tabindex="-1">工作坊懶人包 <a class="header-anchor" href="#工作坊懶人包" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">套件名稱</th><th style="text-align:left;">說明</th><th style="text-align:left;">安裝連結</th></tr></thead><tbody><tr><td style="text-align:left;">Vue Volar extension Pack</td><td style="text-align:left;">必要套件</td><td style="text-align:left;"><a href="vscode:extension/MisterJ.vue-volar-extention-pack" target="_blank" rel="noreferrer">點我</a></td></tr><tr><td style="text-align:left;">vscode-icons</td><td style="text-align:left;">讓檔案有漂亮的 icon</td><td style="text-align:left;"><a href="vscode:extension/vscode-icons-team.vscode-icons" target="_blank" rel="noreferrer">點我</a></td></tr><tr><td style="text-align:left;">TypeScript Vue Plugin (Volar)</td><td style="text-align:left;">Typescript 開發 Vue 專案用</td><td style="text-align:left;"><a href="vscode:extension/Vue.vscode-typescript-vue-plugin" target="_blank" rel="noreferrer">點我</a></td></tr></tbody></table><h2 id="設置-settings-json" tabindex="-1">設置 settings.json <a class="header-anchor" href="#設置-settings-json" aria-hidden="true">#</a></h2><ol><li><code>Ctrl-Shift-P</code> 輸入 json 搜尋，選擇 <code>Preference: Open User Settings (JSON)</code></li><li>在第一層加入 lint 設置<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">files.autoSave</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onWindowChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 切換視窗自動存檔</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editor.formatOnSave</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 存檔時自動 format</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vetur.validation.template</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 關閉 vetur 驗證 (或直接解除安裝 vetur)</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editor.defaultFormatter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esbenp.prettier-vscode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 預設 format 使用 prettier</span></span>
<span class="line"></span></code></pre></div></li><li>設置 vscode 排除追蹤檔案<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* </span></span>
<span class="line"><span style="color:#676E95;">    node_module、.git 等等資料夾底下有非常多不需要追蹤的檔案，</span></span>
<span class="line"><span style="color:#676E95;">    如果不排除於追蹤清單外，vscode會因為追蹤(watch)的檔案數量檔案達到飽和，</span></span>
<span class="line"><span style="color:#676E95;">    無法對正在編輯的檔案進行追蹤、執行hot reload。</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">files.watcherExclude</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">**/.git/objects/**</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">**/.git/subtree-cache/**</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">**/node_modules/*/**</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="同步帳號的擴充功能與設置" tabindex="-1">同步帳號的擴充功能與設置 <a class="header-anchor" href="#同步帳號的擴充功能與設置" aria-hidden="true">#</a></h2><p>點左下角 (Sign In to Sync Settings)，登入後開啟同步設置 。<br> 目前接受 GitHub、Microsoft 帳號。<br> 在新的電腦登入帳號後就直接可以使用環境，有點像手機 App Store 的概念.<br> 詳細方法：康敏順。</p>`,10),o=[l];function p(r,c,i,d,y,D){return n(),e("div",null,o)}const u=s(t,[["render",p]]);export{h as __pageData,u as default};
