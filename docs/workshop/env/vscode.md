# VSCode 設置vscode
## 安裝 Extension
### 安裝套件的方式：
- 在 VSCode 裡面 `ctrl-shift-x` 搜尋安裝。
- 從 [Marketplace](https://marketplace.visualstudio.com/) 搜尋安裝。

### 工作坊懶人包
| 套件名稱                      | 說明                       | 安裝連結                                                  |
| :---------------------------- | :------------------------- | :-------------------------------------------------------- |
| Vue Volar extension Pack      | 必要套件                   | [點我](vscode:extension/MisterJ.vue-volar-extention-pack) |
| vscode-icons                  | 讓檔案有漂亮的 icon        | [點我](vscode:extension/vscode-icons-team.vscode-icons)   |
| TypeScript Vue Plugin (Volar) | Typescript 開發 Vue 專案用 | [點我](vscode:extension/Vue.vscode-typescript-vue-plugin) |


## 設置 settings.json
1. `Ctrl-Shift-P` 輸入 json 搜尋，選擇 `Preference: Open User Settings (JSON)`
2. 在第一層加入 lint 設置
	```js
	"files.autoSave": "onWindowChange", // 切換視窗自動存檔
	"editor.formatOnSave": true, // 存檔時自動 format
	"vetur.validation.template": false, // 關閉 vetur 驗證 (或直接解除安裝 vetur)
	"editor.defaultFormatter": "esbenp.prettier-vscode" // 預設 format 使用 prettier
	```
3. 設置 vscode 排除追蹤檔案
	```js
	/* 
	    node_module、.git 等等資料夾底下有非常多不需要追蹤的檔案，
	    如果不排除於追蹤清單外，vscode會因為追蹤(watch)的檔案數量檔案達到飽和，
	    無法對正在編輯的檔案進行追蹤、執行hot reload。
	*/
	"files.watcherExclude": {
	    "**/.git/objects/**": true,
	    "**/.git/subtree-cache/**": true,
	    "**/node_modules/*/**": true
	},
	```

## 同步帳號的擴充功能與設置
點左下角 (Sign In to Sync Settings)，登入後開啟同步設置 。  
目前接受 GitHub、Microsoft 帳號。  
在新的電腦登入帳號後就直接可以使用環境，有點像手機 App Store 的概念.  
詳細方法：康敏順。
