import React from 'react';
import { marked } from 'marked';

const MarkdownRenderer = ({ content }) => {
  // Markdown'u HTML'ye dönüştür
  const htmlContent = marked(content);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent as string }}
    />
  );
};

export default MarkdownRenderer;