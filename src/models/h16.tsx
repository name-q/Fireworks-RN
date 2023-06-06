import styled from 'styled-components/native';

const H1Styled = styled.Text<{ color?: string }>`
 font-size:24px;
 width:100%;
 text-align:center;
 color: ${props => props.color ? props.color : '#333'};
`;

const H3Styled = styled.Text<{ color?: string }>`
 font-size:16px;
 width:100%;
 text-align:center;
 color: ${props => props.color ? props.color : '#333'};
`;

interface H16Props {
    children: string;
    color?: string
}

const H1: React.FC<H16Props> = ({ children, color }: H16Props) => {
    return (
        <H1Styled color={color}>{children}</H1Styled>
    )
}

const H3: React.FC<H16Props> = ({ children, color }: H16Props) => {
    return (
        <H3Styled color={color}>{children}</H3Styled>
    )
}

export { H1, H3 }