import styled from 'styled-components'

const Wrapper = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: var(--primary);
    overflow-y: hidden;
    
    .main-container{
        height: 100%;
        width: 100%;
        position: relative;
    }

    .images-container{
        height: 80%;
        width: 100%;
        position: relative;
    }
    
    .images-container img{
        height: 100%;
        width: 100%;
        transition: opacity 1s ease-in-out;
    }

    .images-container img.active {
     opacity: 1;
    }

    .dots-container{
        position: absolute;
        bottom: 100px;
        width: 100%;
        text-align: center;
    }

    .dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    border: 1px solid var(--seasalt);
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.dot.active {
    background-color: var(--seasalt);
}
  

    .text-message{
        position: absolute;
        font-size: 2rem;
        font-weight: bold;
        left: 10%;
        top: 55%;
    }

    .auth-selection-container{
        border-radius: 5px 80px 0px 0px ;
        position: absolute;
        bottom: 0;
        height: 17rem;
        width: 100%;
        background-color: var(--seasalt);
    }


    

    
    
    @media (max-width: 426px) {
        
    }

`;

export default Wrapper;