import styled from 'styled-components/native';

interface OwnProps {
  sizeTop?: string;
  sizeRight?: string;
  sizeBottom?: string;
  sizeLeft?: string;
}

const Margin = styled.View<OwnProps>`
  margin-top: ${(props) => calcMargin(props, 'sizeTop')};
  margin-right: ${(props) => calcMargin(props, 'sizeRight')};
  margin-bottom: ${(props) => calcMargin(props, 'sizeBottom')};
  margin-left: ${(props) => calcMargin(props, 'sizeLeft')};
`;

const calcMargin = (data: OwnProps, type: keyof OwnProps): string =>
  data[type] || '0px';

export default Margin;
