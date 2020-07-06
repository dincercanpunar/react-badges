import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import styles from './badge.module.css'

const Badge = ({ children, type, rounded, badgeStyle, size, extraClassName, style }) => (
    <span 
        style={style}
        className={
            cls(
                extraClassName,
                styles.badge,
                styles[`badge-${badgeStyle}-${type}`],
                styles[`badge-${size}`],
                rounded ? styles[`badge-rounded`] : null
            )
        }
    >
        {children}
    </span>
)

Badge.defaultProps = {
    type: "primary",
    badgeStyle: "solid",
    size: "md",
    rounded: false
}

Badge.propTypes = {
    extraClassName: PropTypes.string,
    children: PropTypes.string,
    rounded: PropTypes.bool,
    type: PropTypes.oneOf(["primary", "success", "danger"]),
    type: PropTypes.oneOf(["solid", "light", "outline"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
}

export default Badge;
