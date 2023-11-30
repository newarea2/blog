import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as l,b as n,d as s,f as e,a as o}from"./app-90f462c1.js";const c={},r=n("h1",{id:"常用类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用类型","aria-hidden":"true"},"#"),s(" 常用类型")],-1),d={id:"_1-routeroptions",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_1-routeroptions","aria-hidden":"true"},"#",-1),v={href:"https://router.vuejs.org/zh/api/#routeroptions",target:"_blank",rel:"noopener noreferrer"},m=o(`<p><code>createRouter</code> 的参数的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">PathParserOptions</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>_PathParserOptions<span class="token punctuation">,</span> <span class="token string">&#39;end&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sensitive&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;strict&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Options to initialize a <span class="token punctuation">{</span><span class="token keyword">@link</span> Router<span class="token punctuation">}</span> instance.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">RouterOptions</span> <span class="token keyword">extends</span> <span class="token class-name">PathParserOptions</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * History implementation used by the router. Most web applications should use
     * \`createWebHistory\` but it requires the server to be properly configured.
     * You can also use a _hash_ based history with \`createWebHashHistory\` that
     * does not require any configuration on the server but isn&#39;t handled at all
     * by search engines and does poorly on SEO.
     *
     * <span class="token keyword">@example</span>
     * \`\`\`js
     * createRouter(<span class="token punctuation">{</span>
     *   history: createWebHistory(),
     *   // other options...
     * <span class="token punctuation">}</span>)
     * \`\`\`
     */</span>
    history<span class="token operator">:</span> RouterHistory<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Initial list of routes that should be added to the router.
     */</span>
    routes<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Function to control scrolling when navigating between pages. Can return a
     * Promise to delay scrolling. Check <span class="token punctuation">{</span><span class="token keyword">@link</span> ScrollBehavior<span class="token punctuation">}</span>.
     *
     * <span class="token keyword">@example</span>
     * \`\`\`js
     * function scrollBehavior(to, from, savedPosition) <span class="token punctuation">{</span>
     *   // \`to\` and \`from\` are both route locations
     *   // \`savedPosition\` can be null if there isn&#39;t one
     * <span class="token punctuation">}</span>
     * \`\`\`
     */</span>
    scrollBehavior<span class="token operator">?</span><span class="token operator">:</span> RouterScrollBehavior<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Custom implementation to parse a query. See its counterpart,
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> RouterOptions.stringifyQuery<span class="token punctuation">}</span>.
     *
     * <span class="token keyword">@example</span>
     * Let&#39;s say you want to use the [qs package](https://github.com/ljharb/qs)
     * to parse queries, you can provide both \`parseQuery\` and \`stringifyQuery\`:
     * \`\`\`js
     * import qs from &#39;qs&#39;
     *
     * createRouter(<span class="token punctuation">{</span>
     *   // other options...
     *   parseQuery: qs.parse,
     *   stringifyQuery: qs.stringify,
     * <span class="token punctuation">}</span>)
     * \`\`\`
     */</span>
    parseQuery<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">typeof</span> parseQuery<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Custom implementation to stringify a query object. Should not prepend a leading \`?\`.
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> RouterOptions.parseQuery | parseQuery<span class="token punctuation">}</span> counterpart to handle query parsing.
     */</span>
    stringifyQuery<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">typeof</span> stringifyQuery<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Default class applied to active <span class="token punctuation">{</span><span class="token keyword">@link</span> RouterLink<span class="token punctuation">}</span>. If none is provided,
     * \`router-link-active\` will be applied.
     */</span>
    linkActiveClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Default class applied to exact active <span class="token punctuation">{</span><span class="token keyword">@link</span> RouterLink<span class="token punctuation">}</span>. If none is provided,
     * \`router-link-exact-active\` will be applied.
     */</span>
    linkExactActiveClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">createRouter</span><span class="token punctuation">(</span>options<span class="token operator">:</span> RouterOptions<span class="token punctuation">)</span><span class="token operator">:</span> Router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-routerecordraw-和-routerecordnormalized" tabindex="-1"><a class="header-anchor" href="#_2-routerecordraw-和-routerecordnormalized" aria-hidden="true">#</a> 2 RouteRecordRaw 和 RouteRecordNormalized</h2><p>相同点：都反映了路由<strong>记录相关</strong>信息。</p><p>区别：</p><ul><li>RouteRecordRaw 是配置路由时，由<strong>用户输入的</strong>路由记录</li><li>RouteRecordNormalized 用户输入的路由记录，<strong>经路由系统解析后得到的</strong>标准路由记录</li></ul>`,6),k={id:"_2-1-routerecordraw",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_2-1-routerecordraw","aria-hidden":"true"},"#",-1),h={href:"https://router.vuejs.org/zh/api/#routerecordraw",target:"_blank",rel:"noopener noreferrer"},y=o(`<p>路由记录</p><ul><li>使用 <code>createRouter</code> 的选项 <code>routes</code> 的类型，及其中的 <code>children</code> 的类型。</li><li>作为 <code>addRoute</code> 的参数的类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">PathParserOptions</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>_PathParserOptions<span class="token punctuation">,</span> <span class="token string">&#39;end&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sensitive&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;strict&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@internal</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">_PathParserOptions</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Makes the RegExp case sensitive. Defaults to false
     */</span>
    sensitive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Should we disallow a trailing slash. Defaults to false
     */</span>
    strict<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Should the RegExp match from the beginning by prepending a \`^\` to it. Defaults to true
     * <span class="token keyword">@internal</span>
     */</span>
    start<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Should the RegExp match until the end by appending a \`$\` to it. Defaults to true
     */</span>
    end<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Common properties among all kind of <span class="token punctuation">{</span><span class="token keyword">@link</span> RouteRecordRaw<span class="token punctuation">}</span>
 * <span class="token keyword">@internal</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">_RouteRecordBase</span> <span class="token keyword">extends</span> <span class="token class-name">PathParserOptions</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Path of the record. Should start with \`/\` unless the record is the child of
     * another record.
     *
     * <span class="token keyword">@example</span> \`/users/:id\` matches \`/users/1\` as well as \`/users/posva\`.
     */</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Where to redirect if the route is directly matched. The redirection happens
     * before any navigation guard and triggers a new navigation with the new
     * target location.
     */</span>
    redirect<span class="token operator">?</span><span class="token operator">:</span> RouteRecordRedirectOption<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Aliases for the record. Allows defining extra paths that will behave like a
     * copy of the record. Allows having paths shorthands like \`/users/:id\` and
     * \`/u/:id\`. All \`alias\` and \`path\` values must share the same params.
     */</span>
    alias<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Name for the route record.
     */</span>
    name<span class="token operator">?</span><span class="token operator">:</span> RouteRecordName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Before Enter guard specific to this record. Note \`beforeEnter\` has no
     * effect if the record has a \`redirect\` property.
     */</span>
    beforeEnter<span class="token operator">?</span><span class="token operator">:</span> NavigationGuardWithThis<span class="token operator">&lt;</span><span class="token keyword">undefined</span><span class="token operator">&gt;</span> <span class="token operator">|</span> NavigationGuardWithThis<span class="token operator">&lt;</span><span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Arbitrary data attached to the record.
     */</span>
    meta<span class="token operator">?</span><span class="token operator">:</span> RouteMeta<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Array of nested routes.
     */</span>
    children<span class="token operator">?</span><span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Route Record defining one single component with the \`component\` option.
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">RouteRecordSingleView</span> <span class="token keyword">extends</span> <span class="token class-name">_RouteRecordBase</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Component to display when the URL matches this route.
     */</span>
    component<span class="token operator">:</span> RawRouteComponent<span class="token punctuation">;</span>
    components<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>
    redirect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Allow passing down params as props to the component rendered by \`router-view\`.
     */</span>
    props<span class="token operator">?</span><span class="token operator">:</span> _RouteRecordProps<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">RouteRecordRaw</span> <span class="token operator">=</span> RouteRecordSingleView <span class="token operator">|</span> RouteRecordSingleViewWithChildren <span class="token operator">|</span> RouteRecordMultipleViews <span class="token operator">|</span> RouteRecordMultipleViewsWithChildren <span class="token operator">|</span> RouteRecordRedirect<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={id:"_2-2-routerecordnormalized",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#_2-2-routerecordnormalized","aria-hidden":"true"},"#",-1),w={href:"https://router.vuejs.org/zh/api/#routerecordnormalized",target:"_blank",rel:"noopener noreferrer"},f=o(`<p>路由记录的标准化版本，用于</p><ul><li>getRoutes 返回的数组中的每项的类型；</li><li>导航守卫中 <code>to</code>、<code>from</code> 中的 <code>matched</code> 的类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Normalized version of a <span class="token punctuation">{</span><span class="token keyword">@link</span> RouteRecord | route record<span class="token punctuation">}</span>.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">RouteRecordNormalized</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@inheritDoc</span> _RouteRecordBase.path<span class="token punctuation">}</span>
     */</span>
    path<span class="token operator">:</span> _RouteRecordBase<span class="token punctuation">[</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@inheritDoc</span> _RouteRecordBase.redirect<span class="token punctuation">}</span>
     */</span>
    redirect<span class="token operator">:</span> _RouteRecordBase<span class="token punctuation">[</span><span class="token string">&#39;redirect&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@inheritDoc</span> _RouteRecordBase.name<span class="token punctuation">}</span>
     */</span>
    name<span class="token operator">:</span> _RouteRecordBase<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@inheritDoc</span> RouteRecordMultipleViews.components<span class="token punctuation">}</span>
     */</span>
    components<span class="token operator">:</span> RouteRecordMultipleViews<span class="token punctuation">[</span><span class="token string">&#39;components&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Nested route records.
     */</span>
    children<span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@inheritDoc</span> _RouteRecordBase.meta<span class="token punctuation">}</span>
     */</span>
    meta<span class="token operator">:</span> Exclude<span class="token operator">&lt;</span>_RouteRecordBase<span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@inheritDoc</span> RouteRecordMultipleViews.props<span class="token punctuation">}</span>
     */</span>
    props<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> _RouteRecordProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Registered beforeEnter guards
     */</span>
    beforeEnter<span class="token operator">:</span> _RouteRecordBase<span class="token punctuation">[</span><span class="token string">&#39;beforeEnter&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Registered leave guards
     *
     * <span class="token keyword">@internal</span>
     */</span>
    leaveGuards<span class="token operator">:</span> Set<span class="token operator">&lt;</span>NavigationGuard<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Registered update guards
     *
     * <span class="token keyword">@internal</span>
     */</span>
    updateGuards<span class="token operator">:</span> Set<span class="token operator">&lt;</span>NavigationGuard<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Registered beforeRouteEnter callbacks passed to \`next\` or returned in guards
     *
     * <span class="token keyword">@internal</span>
     */</span>
    enterCallbacks<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> NavigationGuardNextCallback<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Mounted route component instances
     * Having the instances on the record mean beforeRouteUpdate and
     * beforeRouteLeave guards can only be invoked with the latest mounted app
     * instance if there are multiple application instances rendering the same
     * view, basically duplicating the content on the page, which shouldn&#39;t happen
     * in practice. It will work if multiple apps are rendering different named
     * views.
     */</span>
    instances<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> ComponentPublicInstance <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Defines if this record is the alias of another one. This property is
     * \`undefined\` if the record is the original one.
     */</span>
    aliasOf<span class="token operator">:</span> RouteRecordNormalized <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">RouteRecord</span> <span class="token operator">=</span> RouteRecordNormalized<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标准路由记录包含了全部的属性（属性全是必须的），如果没有配置某项属性，则该属性为空。</p><h2 id="_3-routelocationraw-和-routelocationnormalized" tabindex="-1"><a class="header-anchor" href="#_3-routelocationraw-和-routelocationnormalized" aria-hidden="true">#</a> 3 RouteLocationRaw 和 RouteLocationNormalized</h2><p>相同点：都反映了<strong>路由地址</strong>相关信息。</p><p>区别：</p><ul><li>RouteLocationRaw 导航时，<strong>用户配置</strong>的路由地址</li><li>RouteLocationNormalized 用户配置的路由地址，<strong>经路由系统解析后得到的</strong>标准路由地址</li></ul>`,8),_={id:"_3-1-routelocationraw",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#_3-1-routelocationraw","aria-hidden":"true"},"#",-1),z={href:"https://router.vuejs.org/zh/api/#routelocationraw",target:"_blank",rel:"noopener noreferrer"},N=o(`<p>用户级的路由地址，<strong>用来告诉路由系统“我要去哪个页面”</strong>，可以用于：</p><ul><li>传递给 <code>push</code>、<code>redirect</code>方法的参数的类型；</li><li><code>&lt;router-link&gt;</code> props <code>to</code> 的类型；</li><li>用于在导航首位中返回。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">RouteLocationRaw</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> RouteLocationPathRaw <span class="token operator">|</span> RouteLocationNamedRaw<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以是字符串、对象，有三种形式，如</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/users/posva#bio&#39;</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/posva&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&#39;#bio&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;posva&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&#39;#bio&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P={id:"_3-2-routelocationnormalized",tabindex:"-1"},B=n("a",{class:"header-anchor",href:"#_3-2-routelocationnormalized","aria-hidden":"true"},"#",-1),L={href:"https://router.vuejs.org/zh/api/#routelocationnormalized",target:"_blank",rel:"noopener noreferrer"},E=o(`<p>标准化的路由地址，没有任何重定向记录。在导航守卫中，to 和 from 总是属于这种类型。</p><p>上面的 <code>router.push(&#39;/users/posva#bio&#39;)</code> 经解析后可以得到 <code>RouteLocationNormalized</code> 类型对象，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  fullPath: &#39;&#39;,
  hash: &#39;#bio&#39;,
  query: &#39;&#39;,
  matched: [
    // ...
  ],
  meta: &#39;&#39;,
  name: &#39;&#39;,
  params: { username: &#39;posva&#39; }，
  path: &#39;/users/posva&#39;，
  redirectedFrom: &#39;&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function O(C,S){const a=i("ExternalLinkIcon");return p(),l("div",null,[r,n("h2",d,[u,s(" 1 "),n("a",v,[s("RouterOptions"),e(a)])]),m,n("h3",k,[b,s(" 2.1 "),n("a",h,[s("RouteRecordRaw"),e(a)])]),y,n("h3",g,[R,s(" 2.2 "),n("a",w,[s("RouteRecordNormalized"),e(a)])]),f,n("h3",_,[x,s(" 3.1 "),n("a",z,[s("RouteLocationRaw"),e(a)])]),N,n("h3",P,[B,s(" 3.2 "),n("a",L,[s("RouteLocationNormalized"),e(a)])]),E])}const D=t(c,[["render",O],["__file","common-type.html.vue"]]);export{D as default};
