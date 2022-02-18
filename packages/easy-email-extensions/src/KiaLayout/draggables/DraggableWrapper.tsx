import { BlockAvatarWrapper } from 'easy-email-editor';
import React, { useCallback, useEffect, useRef } from 'react';
import { BlockType } from 'easy-email-core';
import styles from './draggable.module.scss';

export const DraggableWrapper: React.FC<{
  type: BlockType | string;
  payload: any;
}> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const { type, payload } = props;

  const onMouseDown = useCallback(() => {
    if (ref.current) {
      ref.current.classList.add(styles.drag);
    }
  }, []);

  const onMaskMouseDown: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (ev) => {
      if (
        !dragRef.current ||
        !dragRef.current.contains(ev.target as HTMLElement)
      ) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    },
    []
  );

  useEffect(() => {
    const mouseup = () => {
      if (ref.current) {
        ref.current.classList.remove(styles.drag);
      }
    };
    document.addEventListener('mouseup', mouseup);
    return () => {
      document.removeEventListener('mouseup', mouseup);
    };
  }, []);

  return (
    <div style={{
      marginBottom: '5px'
      }}
    >

       <div
        className={styles.wrapper}
        style={{
          height: '100%',
        }}
       >
        <BlockAvatarWrapper type={type} payload={payload}>
          <div ref={ref} className={styles.mask} onMouseDown={onMaskMouseDown}>
            <div
              ref={dragRef}
              style={{
                cursor: 'grab',
              }}
              onMouseDown={onMouseDown}
            >
              {props.children}
            </div>
          </div>
        </BlockAvatarWrapper>
       </div>
    </div>
  );
};
