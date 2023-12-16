const useDate = () => {
  const date = new Date();

  const addOrdinalSuffix = (day: number) => {
    if (day >= 11 && day <= 13) {
      return `${day}th`;
    }
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const getDay = () => {
    const day = date.getDate();
    return addOrdinalSuffix(day);
  };

  const getMonth = () => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return month[date.getMonth()];
  };

  const getYear = () => {
    return date.getFullYear();
  };

  const addDay = (numberOfDays: number, baseDate = date) => {
    const newDate = new Date(baseDate);
    newDate.setDate(baseDate.getDate() + numberOfDays);

    return newDate;
  };

  const addMonth = (numberOfMonths: number, baseDate = date) => {
    const newDate = new Date(baseDate);
    newDate.setMonth(baseDate.getMonth() + numberOfMonths);

    return newDate;
  };

  return { date, getDay, getMonth, getYear, addDay, addMonth };
};

export default useDate;
