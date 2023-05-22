import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,700&display=swap');

*{
    margin : 0 ;
    padding : 0 ;
    box-sizing : border-box;
    list-style : none;
    
}

button{
    cursor: pointer;
}
`;
