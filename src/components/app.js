import React, {Component} from 'react';
import styled, {keyframes, ThemeProvider} from "styled-components";
import theme from 'styled-theming';


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'}
  color: ${props => props.primary ? 'white' : 'palevioletred'}
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const TomatoButton = Button.extend`
    color: tomato;
    border-color: tomato;
`;

const Link = ({className, children}) => (
    <a className={className}>
        {children}
    </a>
);

const LinkFromTag = Button.withComponent('a');
const TomatoLinkFromTag = LinkFromTag.extend`
    color: tomato;
    border-color: tomato;
`;

const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const boxBackgroudColor = theme('mode', {
    light: '#fff',
    dark: '#000'
});

const Box = styled.div`
  background-color: ${boxBackgroudColor};
`;


export default class App extends Component {

    render() {
        return (
            <ThemeProvider theme={{mode: 'dark'}}>
               {/* <Wrapper>
                    <Title>
                        Hello world, this is the content.
                    </Title>
                    <Input placeholder="Hello world"/>
                    <Input value="Another input"/>
                    <Button primary>Primary</Button>
                    <Button>Normal</Button>
                    <TomatoButton>Tomato Button</TomatoButton>
                    <Link>Normal link</Link>
                    <StyledLink>Styled link</StyledLink>
                    <LinkFromTag>Normal Link</LinkFromTag>
                    <TomatoLinkFromTag>Tomato Link</TomatoLinkFromTag>
                    <Rotate>&lt; 💅 ">">">&gt;</Rotate>
                </Wrapper>*/}
                <Box>Hello world</Box>
            </ThemeProvider>
        );
    }
}
