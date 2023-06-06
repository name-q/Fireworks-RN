import styled from 'styled-components/native';

const ImageStyled = styled.Image`
 flex:1;
`;

interface WwwImageProps {
    uri: string;
}

const WwwImage: React.FC<WwwImageProps> = ({ uri }: WwwImageProps) => {
    return (
        <ImageStyled source={{ uri }} resizeMethod='resize' resizeMode='stretch' />
    )
}

export default WwwImage