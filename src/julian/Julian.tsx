import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import IDateProps from "./types/IDateProps";

const Julian: FunctionComponent<IDateProps> = (props: IDateProps) => {
   const { date } = props;
   return <div>Julian Date Today: {format(date, "DDD")}</div>;
};

export default Julian;
