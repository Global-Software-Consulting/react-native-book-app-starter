import styled, { css } from 'styled-components';
interface Props {
    danger: boolean;
    standard: boolean;
}

export const Title = styled.Text`
    ${(props: Props) =>
        props.danger
            ? css`
                  color: red;
              `
            : props.standard
            ? css`
                  color: black,
                  fontWeight: bold,
              `
            : css`
                  color: blue;
              `};
`;
