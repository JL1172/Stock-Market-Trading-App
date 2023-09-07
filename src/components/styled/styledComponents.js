import styled, { keyframes, css } from "styled-components";

export const chevronRight = "https://cdn-icons-png.flaticon.com/512/120/120893.png";
export const chevronLeft = "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3271868/chevron-left-icon-md.png";


const kf5 = keyframes`
0% {
opacity : 0;
}
100% {
    opacity : 1;
}
`

const kf = keyframes`
0% {
    transform : translateX(-1rem);

}
100% {
    width : 28rem;
}
`
const kf1 = keyframes`
0% {
    opacity : 0;
}

100% {

    opacity : 1;
    background-color: rgb(142, 159, 211);
}
`
const h4kf = keyframes`
0% {
    opacity : 0;
}
100% {
    opacity : .5;
}
`

const rotate = keyframes`
0% {
    left : 100%;
    opacity : .5;
}
100% {
    left : 0%;
    opacity : .5;
}
`

export const StyledDiv = styled.div`
display : flex;
background-color  : lightgray;
height : 120vh;
.rotating {
    animation : ${rotate} 4s ease-in-out forwards;
    color : lightblue;
    top: 1rem;
    left: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    span {
        margin-right  : 3.5rem;
        margin-left : 1rem;
        &:hover {
            color : white;
        }
}
b {
    padding-left : 6px;
}

}

`

export const Saved = styled.div`
width : 2rem;
background-color: #16223a;
  border-right: 4px solid rgb(80, 94, 138);
  height : 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction : column;
  align-items: flex-start;
    margin-top : 1rem;
.quick {
    display: flex;
    opacity : 0;
  margin-top: 9rem;
  margin-left : 1rem;
  align-items: center;
  justify-content : center;
  width : 17rem;
  justify-content: ${props => props.viewSaved ? "space-evenly" : "flex-end"};
  ${props =>
        props.viewSaved &&
        css`
    animation : ${kf1} .4s ease-in-out forwards;
    animation-delay : .5s;
    `
    }
  border-radius: 5px;
  h4 {
    opacity : 1;
    span {
        padding-left : 1rem;
    }
  }
}
${props =>
        props.viewSaved &&
        css`
    animation : ${kf} .5s ease-in-out forwards;
    `
    }
.savedAllOfThese {
    margin-top : 1rem;
    margin-left : 1rem;
    display : flex;
    justify-content: space-between;
    color : white;
    opacity : 0;
    ${props =>
        props.viewSaved &&
        css`
    animation : ${h4kf} .5s ease-in-out forwards;
    animation-delay : .3s;
    `
    }
    width : 95%;
    border-bottom : 2px solid rgb(80, 94, 138);
}

`
export const StyledGraph = styled.div`
    width : 50rem;
    background-color : lightgray;
    height : 100vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    #main {
        margin-top  :6rem;
        animation : ${kf5} 2s ease-in-out forwards;
        background-color : white;
        display : flex;
        flex-direction : column;
        width : 40rem;
        justify-content : center;
        align-items : center;
        padding : 3rem;
        border-radius : 15px;
        box-shadow : 0 0 2em white;
    }
    h3 {
        margin-bottom : 3rem;
        color :  #16223a;
    }
    #graphs {
        width : 35rem;
    }
    select {
        border : none;
        margin-bottom : 1rem;
        width : 35rem;
        height : 3rem;
        border-radius : 10rem;
        background-color :rgb(80, 94, 138);
        color : white;
        &:focus {
            outline :#16223a;
            box-shadow : 0 0 3em lightgray;
        }
        option {
            transition  : .1s ease-in-out;
            text-align : center;
        }
    }
    button {
        background-color : white;
        border : none;
        outline : 2px solid rgb(80, 94, 138);
        border-radius : 10px;
        width : 8rem;
        height : 3rem;
        margin-right : 1rem;
        &:hover {
            color : white;
            background-color : rgb(80, 94, 138);
            outline-offset : 5px;
            transition : .1s ease-in-out; 
        }
    }
`


export const StyledForm = styled.div`
    width : 50rem;
    margin-top : 10rem;
    background-color : lightgray;
    height : 100vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    div {
        opacity : 0;
        animation : ${kf5} 2s ease-in-out forwards;
        background-color : white;
        display : flex;
        flex-direction : column;
        width : 40rem;
        justify-content : space-evenly;
        align-items : center;
        padding : 3rem;
        border-radius : 15px;
        box-shadow : 0 0 2em white;
        font-size : 20px;
        section {
            display : flex;
            width : 30rem;
            justify-content : space-evenly;
            font-size : 20px;
            b {
                padding-left : 10px;
                border-bottom : 1px solid  rgb(80, 94, 138);
            }
        }
        h1 {
            margin-bottom : 4rem;
            border-bottom : 2px solid rgb(80, 94, 138);
        }
        h3 {
            color :  lightgray;
            width : 40rem;
            height : 3rem;
            display : flex;
            justify-content : center;
            align-items : center;
            margin-bottom : 4rem;
            background-color : rgb(142, 159, 211);
        }
        #footer {
            margin-top  : 5rem;
            margin-bottom : -4rem;
        }
        form {
            border-top : 2px solid rgb(80, 94, 138);
            padding-top : 2rem;
            margin-top : 3rem;
            display : flex;
            flex-direction : column;
            margin-bottom : 2rem;
            #submission {
        display : flex;
        width  : 40rem;
        margin-top : 3rem;
        flex-direction : row-reverse;
            margin-bottom : -2rem;
            #submit{
                background-color : white;
        border : none;
        outline : 2px solid rgb(80, 94, 138);
        border-radius : 10px;
        width : 8rem;
        height : 3rem;
        margin-right : 1rem;
        &:hover {
            color : white;
            background-color : rgb(80, 94, 138);
            outline-offset : 5px;
            transition : .1s ease-in-out; 
        }
    }}
            main {
                margin-bottom : 1rem;
                width : 40rem;
                display : flex;
                justify-content : space-evenly;
                align-items  :center;
                input {
                    border : 2px solid rgb(142, 159, 211);
                    transition : .1s ease-in-out;
                    border-radius : 10px;
                    height : 50px;
                    &:focus {
                        border : none;
                        outline : 2px solid rgb(142, 159, 211);
                        outline-offset : 4px;
                        transition : .1s ease-in-out;
                    }
                }
            }
        }
        button {
        background-color : white;
        border : none;
        outline : 2px solid rgb(80, 94, 138);
        border-radius : 10px;
        width : 8rem;
        height : 3rem;
        margin-right : 1rem;
        &:hover {
            color : white;
            background-color : rgb(80, 94, 138);
            outline-offset : 5px;
            transition : .1s ease-in-out; 
        }
    }
    }
    #confirm {
        background-color : white;
        border : none;
        outline : 2px solid rgb(80, 94, 138);
        border-radius : 10px;
        width : 8rem;
        height : 3rem;
        margin-right : 1rem;
        &:hover {
            color : white;
            background-color : rgb(80, 94, 138);
            outline-offset : 5px;
            transition : .1s ease-in-out; 
        }
    }
`

export const StyledReconciliation = styled.div`
  width : 50rem;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : lightgray;
    #container {
        height : 45vh;
    }
    #closeButton {
        width : 40rem;
        display : flex;
        justify-content : flex-end;
    }
    div {
        animation : ${kf5} 2s ease-in-out forwards;
        background-color : white;
        width : 40rem;
        flex-direction : row;
        justify-content : space-around;
        align-items : center;
        border-radius : 15px;
        box-shadow : 0 0 2em white;
        #gains {
            height :15rem;
        }
        .spreadOut {
                margin-bottom : 1rem;
                b {
                    border-bottom : 2px solid  rgb(142, 159, 211);
                }
            }
        #secondGain {
            display : flex;
            justify-content : space-evenly;
            align-items : baseline;
           .even { 
            margin-top : 1rem;
           }
           #even {
            font-size : 20px;
           }
        }
        #heading {
            background-color :   rgb(142, 159, 211);
            margin : 1rem;
            color : white;
        }
    }
    button {
        margin-top : 1rem;
        background-color : white;
        border : none;
        outline : 2px solid rgb(80, 94, 138);
        border-radius : 10px;
        width : 8rem;
        height : 3rem;
        margin-right : 1rem;
        &:hover {
            color : white;
            background-color : rgb(80, 94, 138);
            outline-offset : 5px;
            transition : .1s ease-in-out; 
        }
    }
`
