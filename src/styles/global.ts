//create global styles

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: ${({ theme }) => theme.colors['color-background']};
    color: ${({ theme }) => theme.colors['text-base']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;

}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors['text-title']};
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

a {
    color: ${({ theme }) => theme.colors['success-light']};
    text-decoration: none;
    font-weight: 700;
    
}




`;