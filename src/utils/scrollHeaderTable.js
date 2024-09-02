export function checkHeaderTbale(value) {
  const { scrollTop, scrollHeight, clientHeight } = value;
  const scrollRatio = scrollTop / (scrollHeight - clientHeight);

  if (scrollRatio > 0.5) {
    return {
      boxShadow: "inset 0 0 6px #3874e2",
      backgroundColor: "#f1f1f7",
    };
  } else {
    return {
      boxShadow: "none",
      backgroundColor: "white",
    };
  }
}
