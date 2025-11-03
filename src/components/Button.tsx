import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 52px;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    transition: background 0.3s ease-in;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled {
        background-color: #ccc;
        cursor: default
    }
`;
