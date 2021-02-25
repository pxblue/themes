/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { typography, createSimpleLightPalette as createSimplePalette } from './shared';
import * as PXBColors from '@pxblue/colors';
import Color from 'color';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

/* 
    Variable color definitions so we can reuse them in the theme overrides below
*/
const ThemeColors = {
    primary: createSimplePalette(PXBColors.blue),
    secondary: createSimplePalette(PXBColors.lightBlue),
    error: createSimplePalette(PXBColors.red),
    success: createSimplePalette(PXBColors.green),
    info: createSimplePalette(PXBColors.lightBlue),
    divider: Color(PXBColors.black[500]).alpha(0.12).string(),
    warning: {
        light: PXBColors.yellow[100],
        main: PXBColors.yellow[500],
        dark: PXBColors.yellow[900],
    },
    background: {
        default: PXBColors.white[200],
        paper: PXBColors.white[50],
    },
    text: {
        primary: PXBColors.black[500],
        secondary: PXBColors.black[300],
        // disabled: Color(PXBColors.black[300]).alpha(0.32).string(),
        hint: PXBColors.gray[500],
    },
    action: {
        // hover: Color(PXBColors.black[50]).alpha(0.1).string(),
        active: PXBColors.gray[500],
        disabled: Color(PXBColors.black[500]).alpha(0.3).string(),
        // disabledBackground: Color(PXBColors.black[200]).alpha(0.24).string(),
    },
};
const WhiteText = PXBColors.white[50];
const BlackBorder = PXBColors.black[500];

/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
export const blueTheme: ThemeOptions = {
    direction: 'ltr',
    typography: typography,
    palette: {
        type: 'light',
        primary: ThemeColors.primary,
        secondary: ThemeColors.secondary,
        error: ThemeColors.error,
        success: ThemeColors.success,
        info: ThemeColors.info,
        warning: ThemeColors.warning,
        background: ThemeColors.background,
        text: ThemeColors.text,
        action: ThemeColors.action,
    },
    overrides: {
        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.text.primary,
                backgroundColor: PXBColors.gray[50],
            },
            colorSecondary: {
                color: PXBColors.white[50],
                backgroundColor: ThemeColors.primary.dark,
                '& .MuiInputBase-root': {
                    color: PXBColors.white[50],
                },
                '& .MuiSelect-icon': {
                    color: PXBColors.white[50],
                },
            },
        },

        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: ThemeColors.primary.light,
                color: ThemeColors.primary.main,
            },
        },

        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            root: {
                backgroundColor: ThemeColors.primary.main,
            },
        },
        MuiBottomNavigationAction: {
            root: {
                color: PXBColors.blue[200],
                '&$selected': {
                    color: WhiteText,
                    '& $label': {
                        fontSize: '0.75rem',
                        fontWeight: 600,
                    },
                },
            },
            selected: {},
            label: {},
        },

        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            contained: {
                backgroundColor: PXBColors.gray[100],
                color: ThemeColors.text.primary,
                '&:hover': {
                    backgroundColor: PXBColors.white[900],
                },
                '&$disabled': {
                    opacity: 0.5,
                },
            },
            containedPrimary: {
                '&:hover': {
                    backgroundColor: PXBColors.blue[300],
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.primary.light,
                    color: PXBColors.blue[200],
                    opacity: 1,
                },
            },
            containedSecondary: {
                '&:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.secondary.light,
                    color: PXBColors.lightBlue[200],
                    opacity: 1,
                },
            },
            outlined: {
                borderColor: ThemeColors.action.disabled,
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[500]).alpha(0.05).string(),
                },
                '&$disabled': {
                    borderColor: ThemeColors.action.disabled,
                    color: ThemeColors.action.disabled,
                },
            },
            outlinedPrimary: {
                borderColor: ThemeColors.primary.main,
                '&:hover': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                },
            },
            outlinedSecondary: {
                borderColor: ThemeColors.secondary.main,
                '&$disabled': {
                    borderColor: ThemeColors.action.disabled,
                },
                '&:hover': {
                    backgroundColor: Color(ThemeColors.secondary.main).alpha(0.05).string(),
                },
            },
            text: {
                '&$disabled': {
                    color: ThemeColors.action.disabled,
                },
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[500]).alpha(0.05).string(),
                },
            },
            textPrimary: {
                '&:hover': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                },
            },
            textSecondary: {
                '&:hover': {
                    backgroundColor: Color(ThemeColors.secondary.main).alpha(0.05).string(),
                },
            },
            disabled: {},
        },

        // CHECKBOX OVERRIDES
        MuiCheckbox: {
            root: {
                color: ThemeColors.action.active,
            },
        },

        // CHIP OVERRIDES
        MuiChip: {
            root: {
                fontSize: '0.875rem',
                backgroundColor: PXBColors.white[500],
                color: ThemeColors.text.primary,
                '& $avatar': {
                    backgroundColor: ThemeColors.primary.main,
                    color: WhiteText,
                },
                '& $avatarColorPrimary': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                },
                '& $avatarColorSecondary': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                },
            },
            clickable: {
                '&:hover': {
                    backgroundColor: PXBColors.gray[100],
                },
            },
            deleteIcon: {
                fontSize: '1.125rem',
                color: ThemeColors.action.active,
                '&:hover': {
                    color: ThemeColors.text.primary,
                },
            },
            deleteIconColorPrimary: {
                color: PXBColors.blue[100],
                '&:hover': {
                    color: WhiteText,
                },
            },
            deleteIconOutlinedColorPrimary: {
                color: PXBColors.blue[200],
                '&:hover': {
                    color: ThemeColors.primary.main,
                },
            },
            outlined: {
                borderColor: Color(BlackBorder).alpha(0.12).string(),
                '&$clickable:hover': {
                    backgroundColor: PXBColors.white[200],
                },
                '& $avatarColorPrimary': {
                    backgroundColor: PXBColors.blue[100],
                    color: ThemeColors.primary.main,
                },
                '& $avatarColorSecondary': {
                    backgroundColor: PXBColors.blue[100],
                    color: ThemeColors.primary.main,
                },
            },
            outlinedPrimary: {
                backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.1).string(),
                },
            },
            icon: {
                fontSize: '1.125rem',
            },
            avatar: {},
            avatarColorPrimary: {},
            avatarColorSecondary: {},
        },

        // FAB OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
            },
        },

        // LIST ITEM OVERRIDES
        MuiListItem: {
            root: {
                color: ThemeColors.text.primary,
            },
        },

        // SLIDER OVERRIDES
        MuiSlider: {
            root: {
                height: 6,
                color: PXBColors.blue[300],
            },
            track: {
                height: 6,
                marginTop: -1,
            },
            rail: {
                height: 4,
                backgroundColor: PXBColors.black[100],
            },
            thumb: {
                height: 20,
                width: 20,
                marginTop: -8,
                backgroundColor: ThemeColors.primary.main,
            },
            thumbColorSecondary: {
                backgroundColor: ThemeColors.secondary.main,
            },
            mark: {
                backgroundColor: PXBColors.blue[200],
                marginTop: 1,
            },
            markActive: {
                backgroundColor: PXBColors.blue[200],
            },
        },

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                backgroundColor: PXBColors.black[900],
                color: PXBColors.black[50],
                '& .MuiButton-textPrimary': {
                    color: PXBColors.blue[200],
                },
                '& .MuiButton-textSecondary': {
                    color: PXBColors.lightBlue[200],
                },
            },
        },

        // STEPPER OVERRIDES
        MuiStepper: {},
        MuiStepConnector: {
            line: {
                borderColor: Color(BlackBorder).alpha(0.12).string(),
            },
        },
        MuiStep: {
            completed: {
                // Place a white background behind the icons so that the checks will not be see-through
                '& .MuiStepLabel-iconContainer:before': {
                    content: '""',
                    position: 'absolute',
                    display: 'block',
                    top: '5%',
                    right: '5%',
                    bottom: '5%',
                    left: '5%',
                    backgroundColor: ThemeColors.background.paper,
                    borderRadius: '50%',
                },
            },
        },
        MuiStepIcon: {
            root: {
                color: PXBColors.white[500],
                zIndex: 1,
            },
            text: {
                fill: ThemeColors.text.primary,
            },
            active: {
                '& $text': {
                    fill: WhiteText,
                },
            },
        },
        MuiStepLabel: {
            label: {
                color: ThemeColors.text.primary,
                '&$active': {
                    fontWeight: 600,
                    color: ThemeColors.primary.main,
                },
                '&$completed': {
                    fontWeight: 600,
                },
            },
            iconContainer: {
                position: 'relative',
            },
            active: {},
            completed: {},
        },

        // SWITCH OVERRIDES
        MuiSwitch: {
            switchBase: {
                color: ThemeColors.background.paper,
                '&$checked + $track': {
                    opacity: 0.38,
                },
            },
            colorPrimary: {
                '&$checked': {
                    color: ThemeColors.primary.main,
                },
            },
            track: {
                backgroundColor: PXBColors.black[100],
                opacity: 1,
            },
            checked: {},
        },

        // TABLE OVERRIDES
        MuiTableCell: {
            head: {
                fontWeight: 600,
            },
        },
        MuiTableHead: {
            root: {
                background: ThemeColors.background.paper,
            },
        },
        MuiTableRow: {
            root: {
                color: PXBColors.black[50],
                backgroundColor: '#FBFBFB', // possible new shade of white
                '&$hover:hover': {
                    backgroundColor: Color('#FBFBFB').mix(Color(PXBColors.black[50]), 0.5).string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: PXBColors.white[50],
                    '&$hover:hover': {
                        backgroundColor: Color(PXBColors.white[50]).mix(Color(PXBColors.black[50]), 0.5).string(),
                    },
                },
                '&$selected': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.primary.main).alpha(0.07).string(),
                    },
                },
            },
            hover: {},
        },
        MuiTableSortLabel: {
            root: {
                '&:hover': {
                    color: ThemeColors.text.primary,
                    '& $icon': {
                        color: PXBColors.black[300],
                        opacity: 1,
                    },
                },
            },
            icon: {
                opacity: 0.12,
            },
        },

        // TABS OVERRIDES
        MuiTab: {
            root: {
                fontWeight: 400,
                '&$selected': {
                    fontWeight: 600,
                },
            },
            textColorPrimary: {
                color: WhiteText,
                opacity: 0.7,
                '&$selected': {
                    color: WhiteText,
                    opacity: 1,
                },
            },
            textColorSecondary: {
                color: WhiteText,
                opacity: 0.7,
                '&$selected': {
                    color: WhiteText,
                    opacity: 1,
                },
            },
            selected: {},
        },
        MuiTabs: {
            indicator: {
                backgroundColor: PXBColors.white[50],
            },
        },

        // TEXT FIELD OVERRIDES
        MuiInput: {
            underline: {
                '&$disabled:before': {
                    borderBottomColor: ThemeColors.action.disabled,
                    borderBottomStyle: 'solid',
                },
                '&$error:not($focused):not(:hover):after': {
                    borderBottomWidth: 1,
                },
            },
            disabled: {},
        },
        MuiFilledInput: {
            root: {
                backgroundColor: ThemeColors.background.default,
                '&:hover': {
                    backgroundColor: PXBColors.white[400],
                },
                '&$focused': {
                    backgroundColor: ThemeColors.background.default,
                },
                '&$disabled': {
                    color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                    backgroundColor: PXBColors.white[100],
                    pointerEvents: 'none',
                },
            },
            underline: {
                '&:before': {
                    borderBottomColor: ThemeColors.divider,
                },
                '&$error:not($focused):after': {
                    borderBottomWidth: 1,
                },
            },
            focused: {},
            disabled: {},
        },
        MuiOutlinedInput: {
            root: {
                '& $notchedOutline': {
                    borderColor: ThemeColors.divider,
                },
                '&$error$colorSecondary$focused $notchedOutline': {
                    borderColor: ThemeColors.error.main,
                },
                '&$error:hover:not($focused) $notchedOutline': {
                    borderColor: PXBColors.red[900],
                },
            },
            colorSecondary: {},
            focused: {},
            error: {},
            notchedOutline: {
                borderColor: ThemeColors.divider,
            },
        },
        MuiFormLabel: {
            root: {
                color: ThemeColors.text.primary,
                '&$error$colorSecondary$focused': {
                    color: ThemeColors.error.main,
                },
            },
            colorSecondary: {},
            focused: {},
        },

        // TOGGLE BUTTON OVERRIDES (LAB)
        // @ts-ignore
        MuiToggleButtonGroup: {
            root: {
                backgroundColor: ThemeColors.background.paper,
            },
            groupedHorizontal: {
                '&:not(:first-child)': {
                    marginLeft: 0,
                },
            },
            groupedVertical: {
                '&:not(:first-child)': {
                    marginTop: 0,
                },
            },
        },
        // @ts-ignore
        MuiToggleButton: {
            root: {
                backgroundColor: ThemeColors.background.paper,
                color: ThemeColors.text.hint,
                borderColor: PXBColors.gray[100],
                '&:hover': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                },
                '&$selected': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                },
            },
            selected: {},
        },
    },
};
