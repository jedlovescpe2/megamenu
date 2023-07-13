import { useGlobalContext } from "../context/Context";
import sublinks from "../data";

const Navlinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page }) => {
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
