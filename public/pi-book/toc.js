// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="preface.html">前言</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">序章</li><li class="chapter-item expanded "><a href="ch01-prologue.html"><strong aria-hidden="true">1.</strong> 不是又一个 LLM 包装器</a></li><li class="chapter-item expanded affix "><li class="part-title">第一篇：分层的纪律</li><li class="chapter-item expanded "><a href="ch02-packages.html"><strong aria-hidden="true">2.</strong> 七个包不是七个项目</a></li><li class="chapter-item expanded "><a href="ch03-reading-map.html"><strong aria-hidden="true">3.</strong> 怎样高效阅读这个仓库</a></li><li class="chapter-item expanded affix "><li class="part-title">第二篇：统一调用面 — pi-ai 的设计</li><li class="chapter-item expanded "><a href="ch04-provider-registry.html"><strong aria-hidden="true">4.</strong> Provider 不是 Adapter</a></li><li class="chapter-item expanded "><a href="ch05-message-transform.html"><strong aria-hidden="true">5.</strong> 消息变换：跨模型交接的隐藏复杂度</a></li><li class="chapter-item expanded "><a href="ch06-event-stream.html"><strong aria-hidden="true">6.</strong> 统一事件流设计</a></li><li class="chapter-item expanded "><a href="ch07-oauth.html"><strong aria-hidden="true">7.</strong> OAuth — 统一认证的隐藏复杂度</a></li><li class="chapter-item expanded affix "><li class="part-title">第三篇：Agent Runtime — 循环引擎的设计</li><li class="chapter-item expanded "><a href="ch08-agent-loop.html"><strong aria-hidden="true">8.</strong> agentLoop — 发动机只管转</a></li><li class="chapter-item expanded "><a href="ch09-tool-execution.html"><strong aria-hidden="true">9.</strong> 工具执行不是插件调用</a></li><li class="chapter-item expanded "><a href="ch10-agent-class.html"><strong aria-hidden="true">10.</strong> Agent — 循环之上的有状态壳</a></li><li class="chapter-item expanded affix "><li class="part-title">第四篇：从 Runtime 到产品</li><li class="chapter-item expanded "><a href="ch11-session-tree.html"><strong aria-hidden="true">11.</strong> 会话树：比"聊天记录"更好的数据模型</a></li><li class="chapter-item expanded "><a href="ch12-compaction.html"><strong aria-hidden="true">12.</strong> Compaction — 把无限对话装进有限窗口</a></li><li class="chapter-item expanded "><a href="ch13-config-layers.html"><strong aria-hidden="true">13.</strong> 三级配置覆盖</a></li><li class="chapter-item expanded "><a href="ch14-system-prompt.html"><strong aria-hidden="true">14.</strong> System Prompt 是一套装配流程</a></li><li class="chapter-item expanded affix "><li class="part-title">第五篇：能力外置</li><li class="chapter-item expanded "><a href="ch15-extensions.html"><strong aria-hidden="true">15.</strong> Extension 系统 — 让产品长出新器官</a></li><li class="chapter-item expanded "><a href="ch16-skills.html"><strong aria-hidden="true">16.</strong> Skill 机制 — 用文档替代代码</a></li><li class="chapter-item expanded "><a href="ch17-resource-loader.html"><strong aria-hidden="true">17.</strong> Resource Loader — 一切外部资源的统一入口</a></li><li class="chapter-item expanded "><a href="ch18-model-registry.html"><strong aria-hidden="true">18.</strong> Model Registry — 模型不只是一个 ID</a></li><li class="chapter-item expanded affix "><li class="part-title">第六篇：工具设计 — 约束即保护</li><li class="chapter-item expanded "><a href="ch19-tool-principles.html"><strong aria-hidden="true">19.</strong> 工具设计原则</a></li><li class="chapter-item expanded "><a href="ch20-edit-tool.html"><strong aria-hidden="true">20.</strong> edit 的设计 — 为什么不能直接写文件</a></li><li class="chapter-item expanded "><a href="ch21-read-tool.html"><strong aria-hidden="true">21.</strong> read 的设计 — 为什么不是简单的 cat</a></li><li class="chapter-item expanded "><a href="ch22-bash-tool.html"><strong aria-hidden="true">22.</strong> bash 与外部世界的边界</a></li><li class="chapter-item expanded "><a href="ch23-search-tools.html"><strong aria-hidden="true">23.</strong> find 和 grep — 结构化搜索替代万能 bash</a></li><li class="chapter-item expanded affix "><li class="part-title">第七篇：UI 层 — 同一颗内核的不同宿主</li><li class="chapter-item expanded "><a href="ch24-tui.html"><strong aria-hidden="true">24.</strong> pi-tui — 在终端里做应用</a></li><li class="chapter-item expanded "><a href="ch25-editor.html"><strong aria-hidden="true">25.</strong> 编辑器组件 — 交互复杂度的集中地</a></li><li class="chapter-item expanded "><a href="ch26-rpc.html"><strong aria-hidden="true">26.</strong> RPC 模式 — pi 作为后端服务</a></li><li class="chapter-item expanded "><a href="ch27-web-ui.html"><strong aria-hidden="true">27.</strong> pi-web-ui — 浏览器里的复用</a></li><li class="chapter-item expanded affix "><li class="part-title">第八篇：产品化实证</li><li class="chapter-item expanded "><a href="ch28-mom-slack.html"><strong aria-hidden="true">28.</strong> mom — Slack 里的 Coding Agent</a></li><li class="chapter-item expanded "><a href="ch29-pods-gpu.html"><strong aria-hidden="true">29.</strong> pods — 为什么这个仓库还要管 GPU</a></li><li class="chapter-item expanded affix "><li class="part-title">第九篇：设计哲学</li><li class="chapter-item expanded "><a href="ch30-minimal-core.html"><strong aria-hidden="true">30.</strong> 极简核心，能力外置</a></li><li class="chapter-item expanded "><a href="ch31-contrarian-choices.html"><strong aria-hidden="true">31.</strong> 反主流选择背后的判断</a></li><li class="chapter-item expanded "><a href="ch32-boundaries.html"><strong aria-hidden="true">32.</strong> 这套架构的适用边界</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="appendix.html">附录</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
