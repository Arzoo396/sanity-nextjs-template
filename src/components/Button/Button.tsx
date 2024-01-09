import Link from 'next/link'
import cx from 'classnames'

import styles from './Button.module.scss'


export type IButton = {
    text: string
    link?: string
    theme?: 'default' | 'ghost' | 'ghostTransparent'
    handleClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
    selected?: boolean
    disabled?: boolean
    optionalType?: 'button' | 'submit' | 'reset'
    target?: string
    tabIndex?: number
}

/* eslint-disable react/button-has-type */
// disabling the button-has-type rule because it doesn't allow dynamic assignment
const Button = ({
    text, link, theme = 'default', handleClick, className, selected = false, disabled = false, optionalType = 'button', target, tabIndex,
}: IButton): JSX.Element => (
    link ? (
        // Link does not allow for onMouseEnter to work for a tags.
        <Link href={link} passHref>
            <a
                href={link}
                className={cx(styles.button, styles[`button__${theme}`], className)}
                target={target}
                tabIndex={tabIndex}
            >
                {text}
            </a>
        </Link>
    ) : (
        <button
            type={optionalType}
            onClick={handleClick}
            disabled={disabled}
            className={cx(
                styles.button,
                styles[`button__${theme}`],
                className,
                {
                    [styles.button__selected]: selected,
                    [styles.button__disabled]: disabled,
                },
            )}
            tabIndex={tabIndex}
        >
           {text}
        </button>
    )
)

export default Button

export interface IFieldBuiltIn {
    _key: string
    sectionTitle?: string
    excludeFromSectionNav?: string
}

export default interface IButtonField extends IFieldBuiltIn, IButton {
    align: 'center' | 'left' | 'right'
    _type: 'button'
}