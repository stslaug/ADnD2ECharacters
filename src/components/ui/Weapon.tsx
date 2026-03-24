  // Component for a single weapon row in the table
export function WeaponTableRow({ weapon }) {
    return (
      <tr>
        <td className="p-2">{weapon.name}</td>
        <td>{weapon.magAdj}</td>
        <td>{weapon.range}</td>
        <td>{weapon.speed}</td>
        {/* 2 columns for Damage VS Size S-M/L */}
        <td>{weapon.damageSm}</td>
        <td>{weapon.damageMl}</td>
      </tr>
    );
  };