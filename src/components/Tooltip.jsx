import { useContext, useEffect } from "react";
import { ShopContext } from "../context";

function Tooltip() {
  const {tooltip: name='', hideTooltip = Function.prototype} = useContext(ShopContext);

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
