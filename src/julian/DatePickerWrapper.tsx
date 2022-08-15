import { FunctionComponent } from "react";
import IDatePickerProps from "./types/IDatePickerProps";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapper: FunctionComponent<IDatePickerProps> = (
   props: IDatePickerProps
) => {
   const { currDate, setDate } = props;
   return (
      <div>
         <DatePicker
            selected={currDate}
            onChange={(date: Date) => setDate(date)}
         />
      </div>
   );
};

export default DatePickerWrapper;
