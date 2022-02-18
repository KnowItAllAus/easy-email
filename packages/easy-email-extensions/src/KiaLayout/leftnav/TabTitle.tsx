import React from 'react';

export const TabTitle: React.FC<{ title: string; index: number }> = ({
  title,
  index,
}) => {
  return (
    <div
      style={{
        paddingTop: index === 0 ? 5 : undefined,
        paddingBottom: 10,
      }}
    >
      {title}
    </div>
  );
};
