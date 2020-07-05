import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import styles from './badge.module.css'

const Badge = ({ children, type, size, extraClassName }) => (
    <div 
        className={
            cls(
                extraClassName,
                styles.badge,
                styles[`badge-${type}`],
                styles[`badge-${size}`],
                styles[`badge-rounded`]
            )
        }
    >
        {children}
    </div>
)

Badge.defaultProps = {
    type: "primary",
    size: "md"
}

Badge.propTypes = {
    extraClassName: PropTypes.string,
    children: PropTypes.string,
    type: PropTypes.oneOf(["primary", "success", "danger"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
}

export default Badge;
