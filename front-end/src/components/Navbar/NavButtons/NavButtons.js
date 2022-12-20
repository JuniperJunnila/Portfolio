import bootstrapStyles from "../../../utils/BootstrapStyles/BootstrapStyles";

const { navButtons } = bootstrapStyles;
const { group, button } = navButtons;

export default function NavButtons({}) {
  return (
    <div className={group} id="group">
      <button
        className={button}
        type="button"
        id="false"
        onClick={null}
        disabled={!true}
      >
        User
      </button>
      <button
        className={button}
        type="button"
        id="true"
        onClick={null}
        disabled={true}
      >
        Admin
      </button>
    </div>
  );
}
