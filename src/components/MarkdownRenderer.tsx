import React from 'react';
import { View, Text } from 'react-native';
import marked from 'marked';

interface MarkdownRendererProps {
  markdownText: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownText }) => {
  const htmlContent = marked(markdownText);

  return (
    <View>
      {/* Render HTML content safely */}
      <Text>{htmlContent}</Text>
    </View>
  );
};

export default MarkdownRenderer;
