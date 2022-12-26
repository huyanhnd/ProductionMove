export function getDate(created) {
    let options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "Asia/Ho_Chi_Minh",
    };
    const dateFomat = new Date(created);
    const [date,time] = (new Intl.DateTimeFormat("en-US", options).format(dateFomat)).split(',')
    const [month,day,year] = date.split('/')
    return {day: day, month:month, year:year, time:time}
  };