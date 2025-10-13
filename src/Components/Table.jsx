export default function Table({ headerArray = [], body }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {headerArray.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}
