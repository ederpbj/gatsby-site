import styled, {css} from 'styled-components';
//Styled-icons
import Icons from '../../components/Icons';

export const EmailWrapper = styled(Icons.Email)`
    color: ${(props) => props.color ? props.color: 'red'};
    width: ${(props) => props.width ? props.width: '100px'};

    ${props=>
    props.orange && 
    css`
       color: orange;
       width: 35px;
    `
};
`