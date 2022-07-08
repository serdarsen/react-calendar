import moment from "moment";

moment.updateLocale("en", {
  week: {
    dow: 1, // Monday is the first day of the week.
  },
});

const FORMAT = ["Do MMMM gggg", "MMMM gggg"];

const DateService = ({
  getNextFormatTypeIndex: (prevIndex: number): number => {
    let index = 0;

    if (prevIndex + 1 < FORMAT.length) {
      index = prevIndex + 1;
    }

    return index;
  },
  getDate: (): moment.Moment => moment(),
  getWeekdaysShort: (): string[] => moment.weekdaysShort(),
  getFirstDayOfWeek: (): moment.Moment => moment().startOf("week"),
  getLastDayOfWeek: (): moment.Moment => moment().endOf("week"),
  getDaysOfWeek: (): number => moment()
    .days(),
  format: (date: moment.Moment, formatType: number): string => {
    let label = "";
    if (date) {
      label = date.format(FORMAT[formatType]);
    } else {
      console.error("Error in DateService.format: Invalid date: ", date);
    }
    return label;
  },
});

export default DateService;
