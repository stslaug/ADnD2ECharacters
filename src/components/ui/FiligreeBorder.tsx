export const FiligreeBorder = ({ children }) => {
    return (
      <div
        style={{
          border: "10px solid transparent",
          borderImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\' viewBox=\'0 0 64 64\'%3E%3Cpath d=\'M64 0H0v64h64V0zM4 4h56v56H4V4z\' fill=\'%23000000\'/%3E%3C/svg%3E")', // Placeholder for repeating border-image. A full SVG of the complex border is too large to embed, but a simple border will do for the classic look. A repeating background is also an option. For this task, a clean border-image or repeating background is best. A repeating background image for the edges would be more accurate.
          borderImageSlice: 4,
          borderImageWidth: "10px",
          borderImageRepeat: "repeat",
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {children}
      </div>
    );
  };