export default (theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",

      "& .drop-zone": {
        width: "100%",
        border: "solid 1px",
        margin: "0 10px 0 15px",
        padding: "10px",
      },

      "& .draggable-list": {
        marginLeft: "15px",
      },
      "& .drag-item": {
        textAlign: "left",
        border: "solid 1px darkgray",
        padding: "4px 10px",
        marginBottom: "5px",
      },
    },
  };
};
