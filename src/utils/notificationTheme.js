export const successStyles = (theme) => ({
  root: {
    backgroundColor: "#3377FF",
    borderColor: "#3377FF",
  },

  title: { color: theme.white },
  description: { color: theme.white },
  closeButton: {
    color: theme.white,
  },
});

export const errorStyles = (theme) => ({
  root: {
    backgroundColor: theme.colors.red[6],
    borderColor: theme.colors.red[6],
  },

  title: { color: theme.white },
  description: { color: theme.white },
  closeButton: {
    color: theme.white,
  },
});
