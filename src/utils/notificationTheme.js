export const successStyles = (theme) => ({
    root: {
      backgroundColor: theme.colors.green[6],
      borderColor: theme.colors.green[6],
  
      "&::before": { backgroundColor: theme.white },
    },
  
    title: { color: theme.white },
    description: { color: theme.white },
    closeButton: {
      color: theme.white,
      "&:hover": { backgroundColor: theme.colors.green[7] },
    },
  });
  
  
  export const errorStyles = (theme) => ({
      root: {
        backgroundColor: theme.colors.red[6],
        borderColor: theme.colors.red[6],
    
        "&::before": { backgroundColor: theme.white },
      },
    
      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        "&:hover": { backgroundColor: theme.colors.red[7] },
      },
    });