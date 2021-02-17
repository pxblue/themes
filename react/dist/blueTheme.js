"use strict";
/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var ThemeColors = __importStar(require("@pxblue/colors"));
/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
exports.blueTheme = {
    direction: 'ltr',
    typography: shared_1.typography,
    palette: {
        type: 'light',
        primary: shared_1.createSimpleLightPalette(ThemeColors.blue),
        secondary: shared_1.createSimpleLightPalette(ThemeColors.lightBlue),
        error: shared_1.createSimpleLightPalette(ThemeColors.red),
        success: shared_1.createSimpleLightPalette(ThemeColors.green),
        info: shared_1.createSimpleLightPalette(ThemeColors.lightBlue),
        warning: {
            light: ThemeColors.yellow[100],
            main: ThemeColors.yellow[500],
            dark: ThemeColors.yellow[900],
        },
        background: {
            default: ThemeColors.gray[50],
            paper: ThemeColors.white[50],
        },
        text: {
            primary: ThemeColors.black[500],
            secondary: ThemeColors.black[300],
            hint: ThemeColors.gray[500],
        },
        action: {
            active: ThemeColors.gray[500],
            disabled: 'rgba(0, 0, 0, .25)',
        },
    },
    overrides: {
        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: ThemeColors.blue[50],
                color: ThemeColors.blue[500],
            }
        },
        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.black[500],
                backgroundColor: ThemeColors.gray[50],
            },
            colorSecondary: {
                color: ThemeColors.white[50],
                backgroundColor: ThemeColors.blue[700],
                '& .MuiInputBase-root': {
                    color: ThemeColors.white[50],
                },
                '& .MuiSelect-icon': {
                    color: ThemeColors.white[50],
                },
            },
        },
        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            root: {
                backgroundColor: ThemeColors.blue[500],
            }
        },
        MuiBottomNavigationAction: {
            root: {
                color: ThemeColors.blue[200],
                '&$selected': {
                    color: ThemeColors.white[50],
                    '& $label': {
                        fontSize: '0.75rem',
                        fontWeight: 600,
                    }
                }
            },
            selected: {},
            label: {}
        },
        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            containedPrimary: {
                '&$disabled': {
                    backgroundColor: ThemeColors.blue[50],
                    color: ThemeColors.blue[200],
                    opacity: 1,
                }
            },
            outlined: {
                borderColor: ThemeColors.black[500],
            },
            outlinedPrimary: {
                borderColor: ThemeColors.blue[500],
            },
            outlinedSecondary: {
                borderColor: ThemeColors.lightBlue[500],
            },
            disabled: {},
        },
        // TEXT INPUT OVERRIDES
        MuiFilledInput: {
            root: {
                backgroundColor: ThemeColors.white[200],
            },
        },
        // BUTTON OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
            },
        },
        // LIST ITEM OVERRIDES
        MuiListItem: {
            root: {
                color: ThemeColors.black[500],
            },
        },
        // TABS OVERRIDES
        MuiTab: {
            textColorPrimary: {
                color: ThemeColors.white[50],
                opacity: 0.7,
                '&$selected': {
                    color: ThemeColors.white[50],
                    opacity: 1,
                },
            },
            textColorSecondary: {
                color: ThemeColors.white[50],
                opacity: 0.7,
                '&$selected': {
                    color: ThemeColors.white[50],
                    opacity: 1,
                },
            },
            selected: {}
        },
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.white[50],
            },
        },
        // TOGGLE BUTTON OVERRIDES (LAB)
        // @ts-ignore
        MuiToggleButtonGroup: {
            root: {
                backgroundColor: ThemeColors.white[50],
            },
            groupedHorizontal: {
                '&:not(:first-child)': {
                    marginLeft: 0,
                }
            },
            groupedVertical: {
                '&:not(:first-child)': {
                    marginTop: 0,
                }
            }
        },
        // @ts-ignore
        MuiToggleButton: {
            root: {
                backgroundColor: ThemeColors.white[50],
                color: ThemeColors.gray[500],
                borderColor: ThemeColors.gray[100],
                '&$selected': {
                    backgroundColor: ThemeColors.blue[50],
                    color: ThemeColors.blue[500],
                }
            },
            selected: {}
        }
    },
};
