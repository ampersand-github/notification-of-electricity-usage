# Readme

## 概要
モデリングから画面まで全部つくってみる

## 始め方
### 初回
```zsh
cd backend
touch .env
echo "DATABASE_URL=\"postgresql://root:prisma2020@localhost:5443/prisma\"" >.env
cd ../
```

### 初回以降
```zsh
# docker
cd ./.docker
docker-compose up -d
cd ../

# Nest.js起動
npm run start:dev
```
