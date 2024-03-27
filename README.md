# clone
1. git clone https://github.com/ryoma1113/catchup-front
2. cd catchup-front

# install
#### `turbo --version` OK
skip

#### `turbo --version` NOT FOUND
1. pnpm install turbo ~(pnpm install turbo@1.13.0 --global)~
2. turbo --version
  > turbo@1.13.0

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
