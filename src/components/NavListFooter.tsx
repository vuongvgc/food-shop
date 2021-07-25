interface navProps {
  nav: string[];
}
const NavListFooter: React.FC<navProps> = ({ nav }) => {
  return (
    <>
      <ul className="nav-list">
        {nav.map((item) => {
          return (
            <li className="nav-item" key={item}>
              <a className="nav-link" href="/">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NavListFooter;
