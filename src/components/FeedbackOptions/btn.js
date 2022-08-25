const btn = ({ key, onClick }) => (
  <button type="button" onClick={() => onClick(key)}>
    {key}
  </button>
);

export default btn;
