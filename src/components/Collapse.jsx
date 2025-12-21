import "./Collapse.css";

function Collapse({ title, content, isOpen, onToggle }) {
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={onToggle}>
        <span className="collapse-title">{title}</span>

        <span
          data-testid="collapse-arrow"
          className={isOpen ? "collapse-arrow open" : "collapse-arrow"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>

      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
