  // Component for a spell slot cell
  // {
  //   name: "Magic Missile",
  //   level: 1,
  //   school: "Evocation",
  //   components: "Standard Pouch",
  //   slots: 1,
  //   range: "30 ft.",
  //   duration: "1 round",
  //   damage: "1d4 + 1 damage",
  //   savingThrow: "None",
  //   description: "You create a magical missile that explodes on impact. The missile attempts to meet its target. If the target is a creature, it must succeed on a Dexterity saving throw or take 1d6 force damage. If the target is an object, it must succeed on a Strength saving throw or take 1d6 force damage. If the target is a creature or an object that is Small or smaller, the missile is automatically destroyed. Otherwise, the missile deals half damage to the target, and the missile is destroyed."
  // },
 
  export const SpellSlotCell = ({ spell }) => {
    return (
      <td
        style={{
          position: "relative",
          minHeight: "1.5rem",
          verticalAlign: "top",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0.2rem",
            left: "0.2rem",
            fontWeight: "bold",
          }}
        >
          {spell.name}
        </div>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage:
              'linear-gradient(to top right, transparent calc(50% - 1px), #000 50%, #000 calc(50% + 1px), transparent calc(50% + 2px))', // Black diagonal slash
            backgroundSize: "100% 100%",
            pointerEvents: "none",
          }}
        ></div>
      </td>
    );
  };
  
  // Component for a single spell row
  export const SpellTableRow = ({ spellsInRow }) => {
    return (
      <tr>
        {spellsInRow.map((spell, index) => (
          <SpellSlotCell key={index} spell={spell} />
        ))}
      </tr>
    );
  };