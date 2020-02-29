import styled from "styled-components";

export const SquareStyle = styled.button`
  float: left;
  font-size: 50px;
  font-weight: bold;
  margin: 5px;
  padding: 0;
  text-align: center;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-decoration: none;
  color: #fff;
  background-color: #538fbe;
  border: 1px solid #2d6898;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-image: linear-gradient(
    bottom,
    rgb(73, 132, 180) 0%,
    rgb(97, 155, 203) 100%
  );
  background-image: -o-linear-gradient(
    bottom,
    rgb(73, 132, 180) 0%,
    rgb(97, 155, 203) 100%
  );
  background-image: -moz-linear-gradient(
    bottom,
    rgb(73, 132, 180) 0%,
    rgb(97, 155, 203) 100%
  );
  background-image: -webkit-linear-gradient(
    bottom,
    rgb(73, 132, 180) 0%,
    rgb(97, 155, 203) 100%
  );
  background-image: -ms-linear-gradient(
    bottom,
    rgb(73, 132, 180) 0%,
    rgb(97, 155, 203) 100%
  );
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, rgb(73, 132, 180)),
    color-stop(1, rgb(97, 155, 203))
  );
  -webkit-box-shadow: 5px 4px 0px #2b638f, 7px 15px 15px rgb(0, 0, 0, 0.4),
  inset 5px 4px 0px rgb(255, 255, 255, 0.4);
  -moz-box-shadow: 5px 4px 0px #2b638f, 7px 15px 15px rgb(0, 0, 0, 0.4),
    inset 5px 4px 0px rgb(255, 255, 255, 0.4);
  box-shadow: 5px 4px 0px #2b638f, 7px 15px 15px rgb(0, 0, 0, 0.4),
    inset 5px 4px 0px rgb(255, 255, 255, 0.4);

  &:focus {
    outline: none;
  }

  &:active {
    background-image: linear-gradient(
      bottom,
      rgb(88, 154, 204) 0%,
      rgb(90, 150, 199) 100%
    );
    background-image: -o-linear-gradient(
      bottom,
      rgb(88, 154, 204) 0%,
      rgb(90, 150, 199) 100%
    );
    background-image: -moz-linear-gradient(
      bottom,
      rgb(88, 154, 204) 0%,
      rgb(90, 150, 199) 100%
    );
    background-image: -webkit-linear-gradient(
      bottom,
      rgb(88, 154, 204) 0%,
      rgb(90, 150, 199) 100%
    );
    background-image: -ms-linear-gradient(
      bottom,
      rgb(88, 154, 204) 0%,
      rgb(90, 150, 199) 100%
    );
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(88, 154, 204)),
      color-stop(1, rgb(90, 150, 199))
    );
  }
`;
