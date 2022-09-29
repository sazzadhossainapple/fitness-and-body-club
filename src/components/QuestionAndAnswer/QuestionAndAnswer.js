import React from "react";

const QuestionAndAnswer = () => {
  return (
    <div className="lg:my-20 md:my-16 sm:my-6 my-6 ">
      <h1 className="text-xl font-bold mb-6">Question and Answer</h1>
      <div>
        <h1 className="text-lg font-medium mb-4">1. How does React JS work?</h1>
        <p>
          While building client-side apps, a team of Facebook developers
          realized that the DOM is slow (The Document Object Model (DOM) is an
          application programming interface (API) for HTML and XML documents. It
          defines the logical structure of documents and the way a document is
          accessed and manipulated.). So, to make it faster, React implements a
          virtual DOM that is basically a DOM tree representation in JavaScript.
          So when it needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser’s DOM. Unlike browser DOM
          elements, React elements are plain objects and are cheap to create.
          React DOM takes care of updating the DOM to match the React elements.
          The reason for this is that JavaScript is very fast and it’s worth
          keeping a DOM tree in it to speed up its manipulation. Although React
          was conceived to be used in the browser, because of its design it can
          also be used in the server with Node.js.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-lg font-medium mb-4">
          2. What is the difference between state and props in React?
        </h1>
        <p>
          <li>Props are read-only. State changes can be asynchronous.</li>
          <li>
            Props can not be modified. State can be modified using this.setState
          </li>
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-lg font-medium mb-4">
          3. Besides data load, what else is the use effect API used for?
        </h1>
        <p>
          <li>useEffect is used to update time</li>
          <li>Running on state change: validating input field</li>
          <li>Running on state change: live filtering</li>
          <li>Running on state change: trigger animation on new array value</li>
          <li>
            Running on props change: update paragraph list on fetched API data
            update
          </li>
        </p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
