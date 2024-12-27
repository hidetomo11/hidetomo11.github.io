// 404ページバリエーション生成器
const generateVariations = () => {
  // 基本となるカラーパレット
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

  // 100パターンのHTMLを生成
  const variations = [];
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

    const html = generatePageHTML(styles, i + 1);
    variations.push(html);
  }

  return variations;
};

// ランダムな要素を選択するヘルパー関数
function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 404ページのHTMLを生成する関数
function generatePageHTML(styles, index) {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Site not found · GitHub Pages (Variation ${index})</title>
    <style>${styles}</style>
</head>
<body>
    <div class="container">
        <div class="error-code">404</div>
        <div class="message">There isn't a GitHub Pages site here.</div>
        <div class="text">
            If you're trying to publish one, <span class="fake-link">read the full documentation</span> to learn how to set up
            <strong>GitHub Pages</strong> for your repository, organization, or user account.
        </div>
        <div class="footer">
            GitHub Status — @githubstatus
        </div>
        <div class="github-logo">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" fill="#959DA5"></path>
            </svg>
        </div>
    </div>
</body>
</html>`;
}

// 変数をエクスポート
export { generateVariations };
