import moment from "moment";

const ONE_WEEK_IN_DAYS = 7;

const FORMAT = [
  "Do MMMM gggg",
  "Do MMM gggg",
  "DD MMM gggg",
  "DD MM gggg",
  "MMMM gggg",
  "MMMM D",
  "MMM D",
];

const DateService = ({
  findNextFormatTypeIndex: (prevIndex: number): number => {
    let index = 0;

    if (prevIndex + 1 < FORMAT.length) {
      index = prevIndex + 1;
    }

    return index;
  },

  findToday: (): moment.Moment => moment(),

  findWeekdaysShort: (): string[] => moment.weekdaysShort(),

  findMonthdays: (currentDate: moment.Moment): number[] => {
    const dates = [];
    const firstDay = currentDate.clone().startOf("month");
    const lastDay = currentDate.clone().endOf("month");
    const now = firstDay.clone();

    const firstEmptyCellsLength = firstDay.day();

    const lastEmptyCellsLength = (ONE_WEEK_IN_DAYS
        - ((firstEmptyCellsLength + lastDay.date()) % ONE_WEEK_IN_DAYS)
    );

    // Append first empty cells
    for (let i = 0; i < firstEmptyCellsLength; i++) {
      dates.push(null);
    }

    // Append days of month
    while (now.isSameOrBefore(lastDay)) {
      dates.push(now.date());
      now.add(1, "days");
    }

    // Append last empty cells
    for (let i = 0; i < lastEmptyCellsLength; i++) {
      dates.push(null);
    }

    return dates;
  },

  format: (date: moment.Moment, formatType: number): string => (date ? date.format(FORMAT[formatType]) : ""),

  addMonths: (date: moment.Moment, months: number): moment.Moment => date.clone().add(months, "months"),
});

export default DateService;
