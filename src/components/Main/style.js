import styled from "styled-components";

export const Container = styled.main`
      box-shadow: -7px 7px rgb(74, 0, 194);
      box-sizing: border-box;
      width: 80%;
      margin: 1rem;
      border-radius: 8px;
      padding: 1rem;
      transition: .3s;

      ul {
            list-style: none;
      }

      li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem;
      }

      form {
            box-shadow: 0px 0px 0px 2px #222;
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: center;
            border-radius: 8px;
            margin-bottom: 1rem;
            
            button, input {
                  outline: none;
                  padding: 0.5rem;
                  border-radius: 8px;
                  border: 1px solid #444;
                  font-weight: 500;
                  font-size: 1.1rem;
            }

            button {
                  background-color: rgb(74, 0, 194);
                  color: #fff;
                  cursor: pointer;
                  margin: 1rem;
                  padding: 0.5rem 7rem;
                  transition: .2s;

                  &:hover {
                        transform: scale(105%);
                  }
            }
      }
`

export const RemoveButton = styled.button`
      background: crimson;
      border: unset;
      padding: 0.5rem;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      margin: 0 .5rem;
      font-size: 1rem;
`

export const EditButton = styled.button`
      background: #4a00c2;
      border: unset;
      padding: 0.5rem;
      border-radius: 8px;
      color: #fff;
      margin: 0 .5rem;
      cursor: pointer;
      font-size: 1rem;
`