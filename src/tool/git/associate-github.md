# 关联github仓库

新建的 github 仓库里面是没有内容的，可以通过如下方式将本地仓库和远程仓库关联，并推送本地内容到远程

…or create a new repository on the command line

```bash
echo "# setup-parcel" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:stormzhangbx/setup-parcel.git
git push -u origin main
```

…or push an existing repository from the command line

```bash
git remote add origin git@github.com:stormzhangbx/setup-parcel.git
git branch -M main
git push -u origin main
```

`git push -u origin master` 的作用

`-u | --set-upstream`

用 `-u`（`--up-stream`）来建立本地分支与远程某个分支的关联，下次 push 或 pull 时无需指定 `<remote> <branch>`，可以直接 `git push`、`git pull`。
