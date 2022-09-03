import React from "react";
import { connect } from "react-redux";
import { toggleQuotes } from "../redux/actions";

const Quote = ({ quote, toggleQuotes }) => (
    <li className="todo-item" onClick={() => toggleQuotes(quote.quote)}>
        {quote && quote.completed ? "👌" : "👋"}{" "}
        <span>
            {quote.quote}
        </span>
    </li>
);

// export default Todo;
export default connect(
    null,
    { toggleQuotes }
)(Quote);
