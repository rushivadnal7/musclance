import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: var(--primary);
    position: relative;

    .header-container{
        width: 100%;
        height: 25%;
        /* position: absolute;
        top: 0; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: var(--seasalt);
        align-items: start;
        padding: 0px 50px;
        color: var(--primary);
        border-radius: 0px 0px 5px 80px;
    }

    .arrow{
        font-size: 2rem;
        font-weight: 600;
    }
    .header-container :nth-child(2){
        font-size: 2rem;
        font-weight: 600;
    }

    form{
        height: 75%;
        width: 100%;
        /* background-color: aliceblue; */
    }

    .inputs-container{
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0px 40px;
    }

    .height-weight-inputs , .age-gender-inputs {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--seasalt);
}

.feet-inputs {
    width: 2rem;
    margin: 0.5rem;
    background-color: var(--seasalt);
}

#feet , #inches , #weight , #age , #gender{
    margin-left: 0.5rem;
}

.input-elements{
    background-color: transparent;
    color: var(--seasalt);
    height: 2.5rem;
    border-bottom: 1px solid var(--cadet-gray) ;
}

.signin-group{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

`