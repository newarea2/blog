# 创建空白分支

1. 创建一个空白分支，该分支不继承任何提交：

    ```sh
    git checkout --orphan new_branch_name
    ```

2. 上述操作后，会切换到新分支，并继承上一分支下的所有文件（状态为已暂存），所以需要明确地删除工作目录中的所有文件：

    ```sh
    git rm -rf .
    ```

3. 提交这个空的状态：

    ```sh
    git commit --allow-empty -m "Initial empty commit"
    ```
