import { useEffect } from "react";

function Tooltip(props) {
  const {name='', hideTooltip = Function.prototype} = props;

  useEffect(() => {
      const timerId = setTimeout(hideTooltip, 3000);

      return () => {
        clearTimeout(timerId);
      };
  // eslint-disable-next-line
  }, [name]);

  return (
    <div className="app-tooltip">
      <b>{name}</b> added to cart
    </div>
  );
};

export {Tooltip}
