###
 # @Description: file content
 # @Author: xyl
 # @Date: 2020-07-28 15:53:54
 # @LastEditors: xuyiling
 # @LastEditTime: 2021-03-27 11:32:06
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ../lulala-blog

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:yilinglulala/lulala-s-Blog.git master:gh-pages

cd -