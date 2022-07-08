import moment from "moment";

const DateService = ({
  getDate: (): moment.Moment => moment(),
});

export default DateService;
