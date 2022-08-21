import { css } from '@emotion/css';
import { mq } from '../../breakpoint';

export const wrapper = css`
  display: flex;
  height: 100%;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: flex-start;

  ${mq.lg} {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
`;

export const displayInfo = css`
  font-size: 1.5rem;
  width: 80%;
  margin-top: 3rem;
  display: flex;
  font-family: 'Raleway';
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  row-gap: 10px;

  ${mq.lg}{
    width: 50%;
    margin-top: 0;
  }

  ${mq.xl} {
    font-size: 2.5rem;
  }
`;

export const image = css`
  height: 50%;
  align-self: center;

  ${mq.lg}{
    height: auto;
    width: 50%;
    align-self: flex-end;
  }
`;

export const role = css`
  color: #909090;
  font-size: 1rem;
  font-family: 'Raleway-bold';

  ${mq.xl}{
    font-size: 2rem;
  }
`;

export const linkContainer = css`
  display: flex;
  column-gap: 30px;
`;