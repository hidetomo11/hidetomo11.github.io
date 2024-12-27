// router.js
const generatePathPattern = (index) => {
  const patterns = [
    `/404-art/${index}`,
    `/ghost/${btoa(index).substring(0, 5)}`,
    `/not-found/${Date.now() + index}`,
    `/missing/${index.toString(36)}`,
    `/void/${Math.random().toString(36).substr(2, 5)}`
  ];
  return patterns[index % patterns.length];
};

// 100個のパスを生成
const paths = Array.from({length: 100}, (_, i) => generatePathPattern(i));

// URLからバリエーションを決定する関数
const getVariationFromPath = (path) => {
  // パスからパターン番号を抽出するロジック
  const hash = path.split('/').pop();
  return parseInt(hash, 36) % 100 || Math.floor(Math.random() * 100);
};

// リダイレクト処理
const handleRedirect = (path) => {
  const variationIndex = getVariationFromPath(path);
  return `/variations/404-${variationIndex}.html`;
};
