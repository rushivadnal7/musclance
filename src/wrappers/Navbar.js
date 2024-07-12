import styled from "styled-components";

export const Wrapper = styled.nav`
    width: 100%;
    height: 4.5rem;
    display: flex;
    padding: 0px 40px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    background-color: var(--seasalt);
    color: var(--primary);
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: row;
    }

    .icon{
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 2.5rem;
        font-weight: bolder;
    }

    .menu-bar{

    }
    
    .navigate-container{
        width: 45%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        padding: 10px;
        background-color: var(--seasalt);
        transition: all 1s ease-in;
    }

    .menu-openner{
        animation: menu_open_animator 0.5s ease-in forwards;
    }
    .menu-closer{
        animation: menu_close_animator 0.5s ease-in forwards;
    }

    .close-menu{
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .menu-container{
        height: 80%;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .menu-container ul{
        flex-direction: column;
        display: flex; 
        width: 100%;
        height: 50%;
        justify-content: space-evenly;
        align-items: center;
    }

    .menu-container ul li {
        list-style: none;
        font-weight: 500 ;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.2s ease-in;
    }

    .menu-container ul li:hover{
        color: var(--cadet-gray);
    }
    
    .authenticate{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }


     @keyframes menu_open_animator {
        from{
            transform: translateX(-100%);
        }   
        to{
            transform: translateX(0%);
        }
    }
     @keyframes menu_close_animator {
        from{
            transform: translateX(0%);
        }   
        to{
            transform: translateX(-100%);
        }
    }
`