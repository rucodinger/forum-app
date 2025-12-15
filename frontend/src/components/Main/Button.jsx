import "./Button.css";

function setButtonType(type, size) {
    if (type == 'primary') return 'button btn--primary'
    else return 'button btn--ghost'
}

export default function Button(props) {
    const btn_class = setButtonType(props.type, props.size);

    return (
        <button className={btn_class + props.noPadding && 'no-padding'} onClick={props.onclick} id={props.id}>{props.children}</button>
    );
}