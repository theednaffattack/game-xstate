import { Game } from "./game";
import { MenuScreen } from "./menu-screen";

export function App() {
  return (
    // <div className={`${globals} ${styles}`}>
    <MenuScreen>
      <Game />
    </MenuScreen>
    // </div>
  );
}
