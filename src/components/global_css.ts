import { css } from "@linaria/core";

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    body {
      background-color: var(---black);
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    :root {
      --dev-outline: 3px orange dashed;
      --color: hsl(0, 0%, 0%, 1);
      --focus: hsla(207, 90%, 54%, 1);
      --black: #000;
      --white: #fff;

      --space-size: 4;

      --base-font-size: 12px;
      --fluid-typography-ratio: 0.9;

      --rem: calc(var(--base-font-size) + var(--fluid-typography-ratio) * 1vw);

      font-size: var(--rem);

      /* --large-img: calc(var(--rem) * 2); */
      --large-img: 8em;
      --medium-img: 6em;
      --small-img: 3em;

      --white-border: 2px white solid;
    }

    /* React root element */
    #root {
      height: 100%;

      /* grid-template-rows: 30px 1fr 80px; */
    }

    @font-face {
      font-family: "VCR_OSD_MONO", "monospace";
      src: url(../game-assets/fonts/VCR_OSD_MONO.ttf) format("truetype");
    }

    main {
      outline: var(--dev-outline, 2px limegreen dashed);

      display: grid;
      height: 100%;
    }
  }
`;
