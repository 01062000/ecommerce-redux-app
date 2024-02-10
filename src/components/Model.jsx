import classes from "./Model.module.css";

function Model({ children, hideModel }) {
  return (
    <>
      <div className={classes.backdrop} onClick={hideModel} />
      <dialog open className={classes.model}>
        {children}
      </dialog>
    </>
  );
}

export default Model;
