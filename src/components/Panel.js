import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className,
  ); //className: we can add additional classNames

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel; // only shows classNames - avoid duplications in code
