#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# 生成静态文件
sudo npm run build

# 进入生成的文件夹
cd docs

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
sudo git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
sudo git push -f https://github.com/Caisin/caisin.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
