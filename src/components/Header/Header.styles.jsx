import styled from "styled-components";

export const Container = styled.header`
    margin-top: 74px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputSearchContainer = styled.div`
    margin-top: 48px;
    width: 100%;

    input {
        width: 100%;
        background-color: #fff;
        border: 1px solid #000;
        padding: 5px 16px;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

        &::placeholder {
            color: #bcbcbc;
        }
    }
`