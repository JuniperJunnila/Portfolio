import HomeBody from "./HomeBody/HomeBody.js";
import bootstrapStyles from "../../utils/BootstrapStyles/BootstrapStyles.js";

const { home } = bootstrapStyles;
const { wrapper, body } = home;

export default function Home({appState}) {
  return (
    <div className={wrapper} id="wrapper">
      <div className={body} id="body">
        <HomeBody appState={appState} />
      </div>
    </div>
  );
}
