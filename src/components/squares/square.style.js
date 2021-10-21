import Button from 'Material/Button';
import styled from 'styled-components';

const PrimaryButton = styled(Button)`
    && {
        font-size: 20px;
        color:red;
        background: transparent;
        padding: 50px;
    }
    &&:hover {
        background:red;
        color:white;
    }
`;

export default PrimaryButton;