function displayDate() {
  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `Today, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
}

export default displayDate;
