# clone
1. git clone git@github.com:peeek-develop-training/catchup-front.git
2. cd catchup-front
3. node --version > v18.18.* (インストールは別途)
4. pnpm -v > 8.15.* (インストールは別途)

# install
#### `turbo --version` OK
skip

#### `turbo --version` NOT FOUND
1. pnpm install turbo ~(pnpm install turbo@1.13.0 --global)~
2. turbo --version
  > turbo@1.13.0

#### install-2
1. pnpm install
2. pnpm build
3. pnpm dev
   - localhost:3000, 3001がそれぞれweb, docs　のディレクトリで展開されてます。
   - 成功確認　画面↓
<img width="1438" alt="スクリーンショット 2024-03-27 13 03 09" src="https://github.com/ryoma1113/catchup-front/assets/114886327/f678c7d8-91d9-4261-886e-c3ed60f7eab0">

# branches
- `main` 確定物
- `develop` 機能マージ　開発時動作確認 ベースブランチ PR先
- `sub/**` 開発ブランチ develop派生 名称は個人センス

# memo
pnpm dlx create-turbo@latest でプロジェクト自体の作成

## rinks
- https://zenn.dev/hayato94087/articles/d2956e662202a7
- https://turbo.build/repo/docs/getting-started/create-new
- https://zenn.dev/hayato94087/articles/d2956e662202a7
- https://github.com/eishin-inc/mono-cxc-front
