import PersianDate from "./PersianDate";

export default class AppDateTime extends PersianDate{
  constructor(date: PersianDate | number | string | Date = new Date) {
    super(date)
  }
}