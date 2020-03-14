import styled from "styled-components";

export const SquareStyle = styled.button`
  width: 5rem;
  height: 5rem;
  border: 1px solid #2d6898;
  background-color: #538fbe;
  color: #fff;
  font-size: 3.125rem;
  font-weight: bold;
  text-align: center;
  line-height: 5rem;
  text-decoration: none;
  -webkit-border-radius: 0.3125rem;
  -moz-border-radius: 0.3125rem;
  border-radius: 0.3125rem;
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
  -webkit-box-shadow: 0.3125rem 0.25rem 0 #2b638f, 0.4375rem 0.9375rem 0.9375rem rgb(0, 0, 0, 0.4),
  inset 0.3125rem 0.25rem 0 rgb(255, 255, 255, 0.4);
  -moz-box-shadow: 0.3125rem 0.25rem 0 #2b638f, 0.4375rem 0.9375rem 0.9375rem rgb(0, 0, 0, 0.4),
    inset 0.3125rem 0.25rem 0 rgb(255, 255, 255, 0.4);
  box-shadow: 0.3125rem 0.25rem 0 #2b638f, 0.4375rem 0.9375rem 0.9375rem rgb(0, 0, 0, 0.4),
    inset 0.3125rem 0.25rem 0 rgb(255, 255, 255, 0.4);

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
