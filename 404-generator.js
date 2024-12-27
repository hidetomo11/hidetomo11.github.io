import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// カラーパレットの定義
const colors = {
  background: ['#F6F8FA', '#F0F2F4', '#F8FAFC', '#F4F6F8', '#F2F4F6'],
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
