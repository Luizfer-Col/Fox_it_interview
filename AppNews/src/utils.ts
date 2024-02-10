export const formatDate = (dateString: string): string => {
    const fechaObj = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric' 
    };
    return fechaObj.toLocaleString('en-US', options);
  };
  