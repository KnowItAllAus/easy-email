import React from 'react';

export const TabTitle: React.FC<{ title: string; index: number }> = ({
  title,
  index,
}) => {
  return (
    <div
      style={{
        paddingTop: index === 0 ? '0.5em' : undefined,
        paddingBottom: '1em',
        paddingLeft:'0.5em',
      }}
    >
      {title}
    </div>
  );
};
