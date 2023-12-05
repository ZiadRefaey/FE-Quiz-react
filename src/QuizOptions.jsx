import React from "react";
import SelectChoice from "./SelectChoice";
import ChoiceIcon from "./ChoiceIcon";
import Button from "./Button";

export default function QuizOptions() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <SelectChoice content={"23"}>
          <ChoiceIcon>A</ChoiceIcon>
        </SelectChoice>
        <SelectChoice content={"23"}>
          <ChoiceIcon>B</ChoiceIcon>
        </SelectChoice>
        <SelectChoice content={"23"}>
          <ChoiceIcon>C</ChoiceIcon>
        </SelectChoice>
        <SelectChoice content={"23"}>
          <ChoiceIcon>D</ChoiceIcon>
        </SelectChoice>
        <Button>Submit Answer</Button>
      </div>
    </>
  );
}
