import styled from "styled-components";
import roots from "../../../styles/roots";


interface ILoaderDefaultProps {
  color: "dark" | "light",
  size: "sm" | "md" | "lg"
}

export const LoaderDefault = styled.div<ILoaderDefaultProps>`
  display: inline-flex;
  .loader {
    border: ${({ size }) => size === "lg" ? "5px" : size === "md" ? "3px" : size === "sm" ? "2px" : ""} solid ${({ color }) => color === "dark" ? roots.color.DARK : roots.color.LIGHT};
    border-left-color: transparent;
    border-radius: 50%;
    width: ${({ size }) => size === "lg" ? "40px" : size === "md" ? "20px" : size === "sm" ? "14px" : ""};
    height: ${({ size }) => size === "lg" ? "40px" : size === "md" ? "20px" : size === "sm" ? "14px" : ""};
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

`