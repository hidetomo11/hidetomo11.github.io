import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// カラーパレットの定義
const colors = {
  background: [
    '#F6F8FA', // オリジナルの薄いグレー
    '#E8F0FE', // 薄い青
    '#F0FFF4', // 薄い緑
    '#FFF5F5', // 薄い赤
    '#FAF5FF', // 薄い紫
    '#FFFAF0', // 薄いオレンジ
    '#F0F4F8', // 別の薄い青
    '#F7FAFC', // さらに別の薄いグレー
    '#F9FAFB', // より明るい灰色
    '#F5F3FF'  // 別の薄い紫
  ],
  text: ['#1F2328', '#24292F', '#2D333B', '#1C2024', '#22272E'],
  link: ['#0969DA', '#0366D6', '#1567D8', '#0757C3', '#0B5DD7'],
  footer: ['#57606A', '#5A6572', '#535B64', '#4E565F', '#596068']
};

// フォントサイズのバリエーション
const fontSizes = {
  errorCode: ['88px', '92px', '96px', '86px', '94px'],
  message: ['22px', '24px', '26px', '23px', '25px'],
  text: ['15px', '16px', '17px', '14px', '18px']
};

// パディングとマージンのバリエーション
const spacing = {
  container: ['35px', '40px', '45px', '38px', '42px'],
  errorMargin: ['14px', '16px', '18px', '15px', '17px'],
  messageMargin: ['13px', '15px', '17px', '14px', '16px']
};

// ランダムな要素を選択するヘルパー関数
function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const generateStyleVariations = async () => {
  try {
    // テンプレートHTMLの読み込み
    const templateHTML = await fs.readFile('404.html', 'utf8');

    // 100パターンのスタイル生成
    for (let i = 0; i < 100; i++) {
      const styles = `
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          line-height: 1.5;
          color: ${randomPick(colors.text)};
          background-color: ${randomPick(colors.background)};
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        .container {
          position: relative;
          max-width: 800px;
          padding: ${randomPick(spacing.container)};
        }
        .error-code {
          font-size: ${randomPick(fontSizes.errorCode)};
          font-weight: ${200 + Math.floor(Math.random() * 100)};
          letter-spacing: ${-1.5 + Math.random()}px;
          color: ${randomPick(colors.text)};
          margin-bottom: ${randomPick(spacing.errorMargin)};
        }
        .message {
          font-size: ${randomPick(fontSizes.message)};
          color: ${randomPick(colors.text)};
          margin-bottom: ${randomPick(spacing.messageMargin)};
          font-weight: 400;
        }
        .text {
          color: ${randomPick(colors.footer)};
          font-size: ${randomPick(fontSizes.text)};
          line-height: ${1.4 + Math.random() * 0.2};
        }
        .fake-link {
          color: ${randomPick(colors.link)};
          text-decoration: none;
          cursor: default;
        }
        .footer {
          margin-top: ${35 + Math.floor(Math.random() * 10)}px;
          color: ${randomPick(colors.footer)};
          font-size: 14px;
        }
        .github-logo {
          margin-top: ${18 + Math.floor(Math.random() * 4)}px;
          opacity: ${0.25 + Math.random() * 0.1};
        }
        .glitch-text {
          display: inline-block;
          position: relative;
        }
        @keyframes textGlitch {
          0% {
            opacity: 1;
          }
          0.1% {
            opacity: 0;
            transform: translate(-0.5px, 0.2px);
          }
          0.2% {
            opacity: 1;
            transform: translate(0);
          }
          15% {
            opacity: 1;
          }
          15.1% {
            opacity: 0.3;
            transform: translate(0.3px, -0.1px);
          }
          15.2% {
            opacity: 1;
            transform: translate(0);
          }
          89% {
            opacity: 1;
          }
          89.1% {
            opacity: 0.4;
            transform: translate(-0.2px, 0.1px);
          }
          89.2% {
            opacity: 1;
            transform: translate(0);
          }
          100% {
            opacity: 1;
          }
        }
        .glitch-text {
          animation: textGlitch 8s infinite;
        }
        .glitch-text:nth-child(2n) {
          animation-delay: 0.3s;
        }
        .glitch-text:nth-child(3n) {
          animation-delay: 0.7s;
        }
        .glitch-text:nth-child(4n) {
          animation-delay: 1.1s;
        }
      `;

      // 元のスタイルタグを新しいスタイルで置換
      const newHTML = templateHTML.replace(
        /<style>[\s\S]*?<\/style>/,
        `<style>${styles}</style>`
      );

      // 新しいファイルとして保存
      await fs.writeFile(`variations/404-${i + 1}.html`, newHTML);
      console.log(`Generated variation ${i + 1}/100`);
    }

    console.log('All variations generated successfully!');
  } catch (error) {
    console.error('Error generating variations:', error);
  }
};

// 実行
generateStyleVariations();
