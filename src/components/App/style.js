export default (theme) => {
  return {
    root: {
      textAlign: "center",
      backgroundColor: "#282c34",
      minHeight: "100vh",
      color: "white",

      "& .App-header": {
        display: "flex",
        flexDirection: "column",
        fontSize: "calc(10px + 2vmin)",
        marginBottom: '10px'
      },
      '& hr': {
        marginBottom: '15px'
      }
    },
  };
};
