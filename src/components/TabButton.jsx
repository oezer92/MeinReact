
// children  der Inhalt der Schalftfläche
// isSelecet ein Boolean der angibt ob die Schalftfläche gerade ausgewählt ist.
// onselect um auf den Button zu Klicken.
export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
