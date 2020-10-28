import styled from "styled-components";

export const Wrapper=styled.div`
    border: 2px solid black;
    width:${({widthProps})=>widthProps ||""};
    padding:${({paddingProps})=>paddingProps ||""};
    margin:${({marginProps})=>marginProps||"" };
    background:${({bgColorProps})=>bgColorProps};
`;

export const StyledButton=styled.button`
    background:${({bgColorProps})=>bgColorProps ||"#ffe599"};
    text-align:center;
    width:${({widthProps})=>widthProps||""};
    padding:${({paddingProps})=>paddingProps||""}
`;