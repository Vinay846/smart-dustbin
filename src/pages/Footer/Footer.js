import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.marquee`
   font-weight: bolder;
`;

function Footer() {
    return (
        <StyledFooter>
            B.Tech Final Year Project (Abhishek Nigma | Vinay Prajapati | Arhan Shekar | Anjali Gutam | Ratnesh Chaudhary)
            | Guide: Dr. Dharmendra Dixit
            | Co-guide: Mr. Prashant Pandey
            | <span><a href="https://youtu.be/3Hx32nT9q6o" target="_blank" rel="noopener noreferrer">Video link</a></span>
        </StyledFooter>
    )
}

export default Footer
