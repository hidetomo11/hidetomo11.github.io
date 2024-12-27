// アニメーションの定義
const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  slideIn: `
    @keyframes slideIn {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `
};

// レイアウトパターンの定義を更新
const layouts = {
  patterns: [
    // パターン1: センター配置（デフォルト）
    {
      container: `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.8s ease-out;
        @media (max-width: 768px) {
          padding: 1rem;
        }
      `,
      errorCode: `
        font-size: FONT_SIZE;
        text-align: center;
        animation: slideIn 1s ease-out;
        @media (max-width: 768px) {
          font-size: calc(FONT_SIZE * 0.7);
        }
      `,
      message: `
        text-align: center;
        animation: fadeIn 1.2s ease-out;
      `
    },
    // パターン2: 左右分割（モバイル対応）
    {
      container: `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;
        animation: fadeIn 0.8s ease-out;
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
      `,
      errorCode: `
        font-size: FONT_SIZE;
        text-align: right;
        border-right: 2px solid BORDER_COLOR;
        padding-right: 2rem;
        @media (max-width: 768px) {
          text-align: center;
          border-right: none;
          border-bottom: 2px solid BORDER_COLOR;
          padding: 1rem 0;
          font-size: calc(FONT_SIZE * 0.7);
        }
      `,
      message: `
        text-align: left;
        padding-left: 2rem;
        animation: slideIn 1s ease-out;
        @media (max-width: 768px) {
          text-align: center;
          padding: 1rem 0;
        }
      `
    },
    // パターン3: 対角線配置（モバイル対応）
    {
      container: `
        display: grid;
        grid-template-areas: 
          "top-left . . top-right"
          ". center center ."
          "bottom-left . . bottom-right";
        gap: 1rem;
        animation: fadeIn 0.8s ease-out;
        @media (max-width: 768px) {
          grid-template-areas: 
            "center"
            "bottom-right";
          gap: 0.5rem;
        }
      `,
      errorCode: `
        font-size: FONT_SIZE;
        transform: rotate(-15deg);
        grid-area: center;
        @media (max-width: 768px) {
          transform: rotate(-5deg);
          font-size: calc(FONT_SIZE * 0.7);
        }
      `,
      message: `
        transform: rotate(15deg);
        grid-area: bottom-right;
        animation: slideIn 1s ease-out;
        @media (max-width: 768px) {
          transform: rotate(5deg);
        }
      `
    },
    // パターン4: グリッドベース（モバイル対応）
    {
      container: `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        animation: fadeIn 0.8s ease-out;
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          padding: 1rem;
          gap: 1rem;
        }
      `,
      errorCode: `
        font-size: FONT_SIZE;
        grid-column: 1 / -1;
        text-align: center;
        @media (max-width: 768px) {
          font-size: calc(FONT_SIZE * 0.7);
        }
      `,
      message: `
        grid-column: 1 / -1;
        text-align: center;
        animation: slideIn 1s ease-out;
      `
    }
  ]
};

// generateStyleVariations 関数を更新
const generateStyleVariations = async () => {
  try {
    const templateHTML = await fs.readFile('404.html', 'utf8');
    
    for (let i = 0; i < 100; i++) {
      const selectedLayout = randomPick(layouts.patterns);
      const borderColor = randomPick(colors.text);
      
      // アニメーションのスタイルを追加
      const animationStyles = Object.values(animations).join('\n');
      
      const styles = `
        ${animationStyles}
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          line-height: 1.5;
          color: ${randomPick(colors.text)};
          background-color: ${randomPick(colors.background)};
          margin: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-x: hidden;
        }
        
        .container {
          position: relative;
          max-width: 800px;
          width: 90%;
          padding: ${randomPick(spacing.container)};
          ${selectedLayout.container.replace('BORDER_COLOR', borderColor)}
        }
        
        .error-code {
          ${selectedLayout.errorCode
            .replace('FONT_SIZE', randomPick(fontSizes.errorCode))
            .replace('BORDER_COLOR', borderColor)}
          font-weight: ${200 + Math.floor(Math.random() * 100)};
          letter-spacing: ${-1.5 + Math.random()}px;
          color: ${randomPick(colors.text)};
          margin-bottom: ${randomPick(spacing.errorMargin)};
        }
        
        .message {
          ${selectedLayout.message}
          font-size: ${randomPick(fontSizes.message)};
          color: ${randomPick(colors.text)};
          margin-bottom: ${randomPick(spacing.messageMargin)};
          font-weight: 400;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `;
      
      // 以下は既存のファイル生成処理を継続
    }
  } catch (error) {
    console.error('Error generating variations:', error);
  }
};
