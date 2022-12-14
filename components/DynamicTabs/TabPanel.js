import PropTypes from "prop-types";
import React from "react";

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{overflow:"hidden"}}
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};