import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,a as g}from"./app-90f462c1.js";const o={},t=g(`<h1 id="c-盘清理" tabindex="-1"><a class="header-anchor" href="#c-盘清理" aria-hidden="true">#</a> C 盘清理</h1><h2 id="_1-第一步-清理-win10-升级留下的-windows-old-文件夹、系统临时文件等" tabindex="-1"><a class="header-anchor" href="#_1-第一步-清理-win10-升级留下的-windows-old-文件夹、系统临时文件等" aria-hidden="true">#</a> 1 第一步：清理 Win10 升级留下的 Windows.old 文件夹、系统临时文件等</h2><p>1.1 打开此电脑（也就是之前的我的电脑），然后在C盘上点右键，选择属性，然后在属性对话框中，点击&quot;磁盘清理&quot;；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073419776522795.png" alt="" tabindex="0" loading="lazy"><figcaption>c.png</figcaption></figure><p>1.2 打开磁盘清理之后，在对话框中间偏下的位置，点击&quot;清理系统文件&quot;的按钮；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073419775961942.png" alt="" tabindex="0" loading="lazy"><figcaption>c-1.png</figcaption></figure><p>1.3 在新打开的对话框中，要删除的文件下面，找到&quot;以前的Windows安装&quot;选项，选中。同时因为我们要清理临时文件，所以也可以选中临时文件选项，点击确定即可。；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073419774840238.png" alt="" tabindex="0" loading="lazy"><figcaption>c-2.png</figcaption></figure><p>有人说为什么没有这个选项，那么可以还有另外一个&quot;<strong>Windows 更新清理</strong>&quot;可以选中。</p><figure><img src="https://img.icoa.cn/20191211/15760718743069517.jpg" alt="update.jpg" tabindex="0" loading="lazy"><figcaption>update.jpg</figcaption></figure><p>1.4 点击确定之后，会提示&quot;如果清理你以前的 Windows 安装或临时安装文件，则不能将计算机恢复到以前版本的Windows。是否确定要这样做？&quot;然后点&quot;是&quot;。然后 Windows.old 和 临时文件就从C盘消失了。</p><h2 id="_2-第二步-转移虚拟内存到其他盘符" tabindex="-1"><a class="header-anchor" href="#_2-第二步-转移虚拟内存到其他盘符" aria-hidden="true">#</a> 2 第二步：转移虚拟内存到其他盘符</h2><p>什么是虚拟内存？虚拟内存一般是用在内存不足的情况下，系统自动调用硬盘的空间，用来暂时替代不够的内存工作（虚拟内存用的是硬盘空间）。我的笔记本装的是16G的内存条，默认情况下依然有虚拟内存，且默认用C盘空间。</p><p>此步骤的目的是将用作虚拟内存的盘由C盘改为其他盘，该步骤能让C盘容量提高几个G。</p><p>2.1 在 【此电脑】上点右键选择【属性】，然后在打开页面，点击左边的 【高级系统设置】 选项，在打开的 系统属性 对话框里，选择【高级】→【设置】，打开【性能选项】对话框；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073422038386625.png" alt="" tabindex="0" loading="lazy"><figcaption>m-1.png</figcaption></figure><p>2.2 然后在打开的【性能选项】对话框，选择【高级】→【更改】，打开【虚拟内存】设置；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073422037238554.png" alt="" tabindex="0" loading="lazy"><figcaption>m-2.png</figcaption></figure><p>2.3 在打开的【虚拟内存】设置对话框里，选择一个硬盘空间比较大的盘符（比如这里选择了E盘），点击【系统管理的大小】，然后点击【设置】，点击【确定】，会提示让你重启电脑，<strong>一定要重启电脑再进行下面的操作</strong>。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073422033873441.png" alt="" tabindex="0" loading="lazy"><figcaption>m-3.png</figcaption></figure><figure><img src="https://img.icoa.cn/20200114/15789655379605009.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>2.4 <strong>设置完其他盘符的虚拟内存并重启</strong>之后，选择【C盘】，点击【无分页文件】→【设置】，点击确定，重启即可。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073422035555998.png" alt="" tabindex="0" loading="lazy"><figcaption>m-4.png</figcaption></figure><p>有些电脑，比如微软出的 Surface Laptop 是无法去掉C盘的虚拟内存的，这时候可以不去掉C盘虚拟内存，直接增加其他盘符的虚拟内存即可。</p><p>如果遇到提示：如果禁用分页文件，或将初始大小设置为少于800 MB并且发生了系统错误，WINDOWS可能不会记录可能有助于标识问题的详细信息，确实要继续吗？</p><p>因为已经设置了其他盘的虚拟内存，那么这里可以点是。</p><h2 id="_3-第三步-将临时文件转移到其他盘符" tabindex="-1"><a class="header-anchor" href="#_3-第三步-将临时文件转移到其他盘符" aria-hidden="true">#</a> 3 第三步：将临时文件转移到其他盘符</h2><p><strong>在D盘下面新建 Temp 文件夹</strong>。然后再进行后面的设置。</p><figure><img src="https://img.icoa.cn/20190830/15671315358255888.jpg" alt="temp.jpg" tabindex="0" loading="lazy"><figcaption>temp.jpg</figcaption></figure><p>3.1 按照第二步的第一个步骤，打开【系统属性】，然后点击下面的【环境变量】，打开环境变量设置窗口；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073427895611067.png" alt="t-1.png" tabindex="0" loading="lazy"><figcaption>t-1.png</figcaption></figure><p>3.2 在打开的环境变量窗口，分别选择【用户变量】下面的【TEMP】和【TMP】变量，然后点击【编辑】，将【变量值】改为其他盘符的文件夹，比如这里改到了D盘下面的 Temp 文件夹（<strong>此文件夹需要提前建好</strong>），然后点击确定。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073428261689496.png" alt="t-2.png" tabindex="0" loading="lazy"><figcaption>t-2.png</figcaption></figure><p>3.1.3 然后向下，找到【系统变量】里面的【TEMP】和【TMP】变量，跟上面的步骤相同，将【变量值】更改为其他盘符下面的文件夹，点确定。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073430176491484.png" alt="t-3.png" tabindex="0" loading="lazy"><figcaption>t-3.png</figcaption></figure><h2 id="_4-第四步-桌面、视频、图片、下载等转移到其他盘符" tabindex="-1"><a class="header-anchor" href="#_4-第四步-桌面、视频、图片、下载等转移到其他盘符" aria-hidden="true">#</a> 4 第四步：桌面、视频、图片、下载等转移到其他盘符</h2><p>4.1 打开【此电脑】找到【桌面】文件夹，然后点右键选择【属性】，打开属性对话框；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073434704635206.png" alt="" tabindex="0" loading="lazy"><figcaption>f-0.png</figcaption></figure><p>4.2 在打开的属性对话框里，选择【位置】标签，然后点击【移动】；</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073434701804578.png" alt="" tabindex="0" loading="lazy"><figcaption>f-1.png</figcaption></figure><p>4.3 这时候，就可以打开其他分区，比如这里是E盘，<strong>新建一个桌面文件夹</strong>（文件夹名称不变，只是路径变了），并选中这个文件夹，点击下面的【选择文件夹】按钮。就可以了，如果原来桌面有文件的话，会有一个文件移动的过程，等文件复制完毕，就成功了。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073434702926282.png" alt="" tabindex="0" loading="lazy"><figcaption>f-2.png</figcaption></figure><p>同样按照这个方法，可以将【文档】【下载】【图片】【音乐】【视频】等文件夹都转移到其他分区（<strong>新建的对应文件夹里</strong>）。这样C盘的可用空间会大很多，而且不会随着之后这些文件夹存的文件变多，而占用C盘空间了。</p><h2 id="_5-第四步-平时安装程序的时候-选择其他分区即可-这个比较简单" tabindex="-1"><a class="header-anchor" href="#_5-第四步-平时安装程序的时候-选择其他分区即可-这个比较简单" aria-hidden="true">#</a> 5 第四步：平时安装程序的时候，选择其他分区即可，这个比较简单</h2><h2 id="_6-第五步-关闭系统的休眠功能" tabindex="-1"><a class="header-anchor" href="#_6-第五步-关闭系统的休眠功能" aria-hidden="true">#</a> 6 第五步：关闭系统的休眠功能</h2><p>6.1 这个需要用到<strong>以管理员身份运行的命令提示符</strong>，方法有很多，比如：点击开始菜单旁边的搜索按钮，输入cmd，找到【命令提示符】。或者用你自己的方法，找到【命令提示符】。然后在【命令提示符】上点右键，选择【以管理员身份运行】，如果【提示允许此应用对你的设备进行更改吗？】，点【是】即可。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073439819283796.png" alt="" tabindex="0" loading="lazy"><figcaption>cmd.png</figcaption></figure><p>7.2 在打开的 【管理员：命令提示符】窗口，输入命令：<strong>powercfg -h off</strong>，然后回车就可以关闭系统休眠功能。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230808/15073439889429915.png" alt="" tabindex="0" loading="lazy"><figcaption>cmd2.png</figcaption></figure><h2 id="_7-清理应用日志文件" tabindex="-1"><a class="header-anchor" href="#_7-清理应用日志文件" aria-hidden="true">#</a> 7 清理应用日志文件</h2><p>双击“c盘清理.bat”即可</p><h2 id="_8-清理-winsxs-文件夹" tabindex="-1"><a class="header-anchor" href="#_8-清理-winsxs-文件夹" aria-hidden="true">#</a> 8 清理 Winsxs 文件夹</h2><p>首先打开 管理员权限的 命令行或者 Powershell，然后执行下面的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Dism /online /Cleanup-Image /StartComponentCleanup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,54),p=[t];function e(c,r){return a(),n("div",null,p)}const l=i(o,[["render",e],["__file","C 盘清理.html.vue"]]);export{l as default};
