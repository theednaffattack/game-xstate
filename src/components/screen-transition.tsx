import { css } from "@linaria/core";

type ScreenTransitionProps = {};

const fadeIn = css`
  @keyframes slidein {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(100%);
    }
  }
`;

const transitionStyles = css`
  height: 100%;
  width: 100%;

  display: grid;
  height: 100%;
  background-color: var(--black);

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  justify-content: center;
  align-content: center;
  /* animation: 200ms slideIn ease-out; */
  animation-name: fadeIn;
  animation-duration: 700ms;
  animation-timing-function: ease-in;
`;

export function ScreenTransition({
  children,
}: ScreenTransitionProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${transitionStyles} transition-comp`}>{children}</div>
  );
}
