export function getDMY(dmy) {
    const [date,time] = dmy.split('T')
    const [year,month,day] = date.split('-')
    return {day: day, month:month, year:year, time:time}
  };