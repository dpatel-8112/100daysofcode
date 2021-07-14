import React from "react";

const ProblemContext = React.createContext();

const ProblemProvider = ProblemContext.Provider;
const ProblemConsumer = ProblemContext.Consumer;

export { ProblemContext };
export { ProblemProvider, ProblemConsumer };
