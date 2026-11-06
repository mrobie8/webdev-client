"use client";
import ClickEvent from "./ClickEvent";
import "@/app/labs/lab2/tailwind/utilities.css";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import BrokenCounter from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import QueryCalculator from "./url-encoding/query-params/page";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";
import HooksPage from "./hooks/page";

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={(message) => alert(message)}
        alertName={() => alert("My name is Maya")}
        theOtherFunction={() => alert("Sample from parent")}
      />
      <BrokenCounter />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <QueryCalculator />
      <UrlEncoding />
      <ContextExamples />
      <ContextProfileForm />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
      <HooksPage />
    </div>
  );
}
