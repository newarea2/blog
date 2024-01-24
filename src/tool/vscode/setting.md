# vscode常用配置

配置文件存放在用户目录的 Appdata\Roaming\Code\User 文件夹中一个名为 “settings”的 json 文件。（ Appdata通常是隐藏的）当要复制设置时，讲该settings.json复制到新环境相应位置即可。

另一种查找settings.json的方法，打开vscode，文件-首选项-设置，找到“在settings.json中编辑”并打开，右击编辑器上方settings.json tab，选择“在资源管理器中显示”，即找到settings.json文件位置。

如果vscode安装了汉化插件Chinese (Simplified) Language Pack for Visual Studio Code，则settings.json同目录下的locale.json文件也需要复制到新环境相应位置即可。

## 1 关闭预览模式（即打开新的文件会覆盖窗口中的原文件）

`"workbench.editor.enablePreview": false,`

## 2 自动保存

`"files.autoSave": "onFocusChange"`

## 3 删除无用空行

ctrl+H , 勾选正则表达式，查找`^\s*(?=\r?$)\n`，并全部替换

## 4 刚安装好vscode时，默认的是不会自动换行的，当代码写的过长的时候想看比较麻烦，这时设置换行就很方便了，下面是设置换行的详细描述

`"editor.wordWrap": "on"`

## 5 将tab改为两个空格 `"editor.tabSize": 2`和`"editor.detectIndentation": false`

打个比方，你对于 JavaScript 的 tabSize 设置可能是2个空格，但是你打开了一个tabSize为4的文件，那么这个时候editor.detectIndentation会检查到此文件内容以4个空格为缩进，便临时将tabSize设置为4个空格，设置`"editor.detectIndentation": false`后就不会发生这种情况。

## 6 控制编辑器是否在用户键入、粘贴或移动行时自动调整缩进`"editor.autoIndent": false`

## 7  取消点击编辑区文件标签时，资源管理器自动定位到该文件

![03](http://image.newarea.site/20230805/03.png)

`"explorer.autoReveal": false`

## 8 关闭右侧预览功能（缩略图）

![04](http://image.newarea.site/20230805/04.png)

`"editor.minimap.enabled": false`

## 9 设置文件选项卡过多时换行

![02](http://image.newarea.site/20230805/02.png)

## 11 设置文件选项卡标题

![05](http://image.newarea.site/20230805/05.png)

`${rootName}${separator}${activeEditorShort}`

## 如何凸显当前文件选项卡

默认情况下，选项卡颜色由文件是否修改、是否有问题决定，使选项卡变得“五颜六色”，不易找到当前编辑的选项卡。所以应该禁用选项卡颜色：

![23](http://image.newarea.site/20230805/23.png)

## 取消文件选项卡中的图标

![08](http://image.newarea.site/20230805/08.png)

## 取消资源管理器中单击文件夹时展开/折叠文件夹树

当要在现有文件夹下新建文件（或文件夹），则需要先选择它，但是，选择（单击）一个文件夹会将其折叠/展开，可能会导致文件列表滚动，不太方便。

![22](http://image.newarea.site/20230805/22.png)

## 10 设置打开文件夹时，在新窗口打开而不是替换上一个活动窗口

![01](http://image.newarea.site/20230805/01.png)

## 12 设置代码提示默认选择第一项

![06](http://image.newarea.site/20230805/06.png)

## 取消资源管理器中文件夹树紧凑展示

![24](http://image.newarea.site/20230805/24.png)

## 取消显示关于 Git 一行的信息，包括 CSS 中的 reference 提示

![10](http://image.newarea.site/20230805/10.png)

![12](http://image.newarea.site/20230805/12.png)

![09](http://image.newarea.site/20230805/09.png)

## 取消显示当前行 Gitlens 信息

![13](http://image.newarea.site/20230805/13.png)

![14](http://image.newarea.site/20230805/14.png)

## 设置代码折叠箭头常显

![15](http://image.newarea.site/20230805/15.png)

![16](http://image.newarea.site/20230805/16.png)

## 设置编辑区滚动条常显

默认情况下，仅当鼠标移动到编辑器，滚动条（如果存在）才显示。这里设置让其常显。

![17](http://image.newarea.site/20230805/17.png)

## 取消滚动打开选项卡

![18](http://image.newarea.site/20230805/18.png)

## 取消显示选项卡右侧各种操作按钮

![19](http://image.newarea.site/20230805/19.png)

如果选项卡较多且存在右侧各种操作按钮，当光标进入（focus）、离开编辑器时，会导致选项卡突然变化（如换行）。

由于没找到相关设置，只能逐个右击每个操作按钮，然后将其取消显示。注意保留更多操作按钮（该按钮也无法隐藏）

![20](http://image.newarea.site/20230805/20.png)

右击更多操作按钮，重新勾选某操作，可以在选项卡上重新显示该操作按钮

![21](http://image.newarea.site/20230805/21.png)

由于这不是通过设置更改的，所以当新打开一个项目，都需要重新设置一次。

## 设置查找工具悬浮于编辑区右上角，而不是独占一行

![25](http://image.newarea.site/20230805/25.png)

设置前：

![27](http://image.newarea.site/20230805/27.png)

设置后：

![26](http://image.newarea.site/20230805/26.png)

## 将文件搜索框、前进/后端按钮置于顶部

右键顶部栏，勾选 Command Center

![28](http://image.newarea.site/20230805/28.png)

## 查看变量定义时，设置直接调转而不要弹框

![29](http://image.newarea.site/20230805/29.png)

这样设置之后，可能无法查变量的其他定义，此时你可以右键变量-Peek-Peek Definition。

设置前：

![30](http://image.newarea.site/20230805/30.png)

## Iconify IntelliSense

取消自动隐藏 icon 名称

![](http://image.newarea.site/2024-01-04-17-47-09.png)

![](http://image.newarea.site/2024-01-04-17-49-30.png)
