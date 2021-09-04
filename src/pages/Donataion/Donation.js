import React,{useEffect} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    position: fixed;
    bottom: 20px;
    right: 16px;
`;

function Donation() {
    useEffect(() => {
        const Script = document.createElement("script");
        const Form = document.getElementById('donateForm');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id','pl_HtGz0ZoD3fKSNA')
        Form.appendChild(Script);
    }, [])
    return (
        <StyledDiv>
            <form id="donateForm"></form>
        </StyledDiv>
    )
}

export default Donation
