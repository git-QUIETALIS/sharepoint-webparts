"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
exports.getCustomSplitButtonStyles = Utilities_1.memoizeFunction(function () {
    return {
        splitButtonMenuButton: { backgroundColor: 'white', width: '10px' },
        splitButtonMenuIcon: { fontSize: '7px' },
        splitButtonDivider: { borderLeft: '1px solid #c8c8c8', right: 12 }
    };
});
//# sourceMappingURL=Button.Split.Example.styles.js.map