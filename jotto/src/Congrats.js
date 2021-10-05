// will receive the success state as a prop and if true we render congratulations
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
export default (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='component-message'>
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};
