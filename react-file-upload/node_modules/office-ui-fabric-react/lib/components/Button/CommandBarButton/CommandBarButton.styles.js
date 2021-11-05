"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
var BaseButton_styles_1 = require("../BaseButton.styles");
var SplitButton_styles_1 = require("../SplitButton/SplitButton.styles");
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var baseSplitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var commandButtonStyles = {
        root: {
            minWidth: '40px',
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralPrimary,
            padding: '0 4px'
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralQuaternary,
            color: theme.palette.black,
        },
        label: {
            fontWeight: 'normal' // theme.fontWeights.semibold,
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles);
});
//# sourceMappingURL=CommandBarButton.styles.js.map