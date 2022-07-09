import moment from "moment";

moment.updateLocale("en", {
  week: {
    dow: 1, // Monday is the first day of the week.
  },
});

const FORMAT = ["Do MMMM gggg", "MMMM gggg"];

const DateService = ({
  findNextFormatTypeIndex: (prevIndex: number): number => {
    let index = 0;

    if (prevIndex + 1 < FORMAT.length) {
      index = prevIndex + 1;
    }

    return index;
  },
  getDate: (): moment.Moment => moment(),
  findWeekdaysShort: ():
  string[] => moment.weekdaysShort().map((day: string) => day.toUpperCase()),
  findWeekdays: (date: moment.Moment): number[] => {
    const firstDay = DateService.findFirstDayOfWeek(date);
    const lastDay = DateService.findLastDayOfWeek(date);

    const now = firstDay.clone();
    const dates = [];

    while (now.isSameOrBefore(lastDay)) {
      dates.push(now.date());
      now.add(1, "days");
    }
    return dates;
  },
  findFirstDayOfWeek: (date: moment.Moment): moment.Moment => date.clone().startOf("week"),
  findLastDayOfWeek: (date: moment.Moment): moment.Moment => date.clone().endOf("week"),
  getDaysOfWeek: (date: moment.Moment): number => date
    .days(),
  format: (date: moment.Moment, formatType: number): string => (date ? date.format(FORMAT[formatType]) : ""),
  addDays: (date: moment.Moment, days: number): moment.Moment => date.clone().add(days, "days"),
});

export default DateService;
