import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'center'};
  flex-direction: ${({ direction }) => direction || 'row'};
`;

export const InTextAnchor = styled.a`
  color: inherit;
  font-size: inherit;
  font-weight: 500;
`;

export const SemiBold = styled.span`
  font-weight: 500;
`;
