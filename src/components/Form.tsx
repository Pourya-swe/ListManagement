import type { FormComponentProps } from "../types/addFormItem.types";

function Form({ children, onSubmit, className }: FormComponentProps) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
