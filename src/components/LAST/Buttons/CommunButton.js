import PropTypes from "prop-types";
// import s from "./button.module.css";

export default function CommunButton({
  children,
  onClick,
  className,
  disabled,
  active,
  ...otherProps
}) {
  return (
    <button
      {...otherProps} //можем добавлять любой атрибут который нам нужен
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
CommunButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};
CommunButton.defaultProps = {
  children: "Any Text", //для того чтоб между  <Button>......</Button> можно было писать любой текст
  onClick: () => {}, //в этот пропс можно передать любую функцию
  className: "",
  disabled: false, // неактивная кнопка
  active: false, // активная кнопка
};
