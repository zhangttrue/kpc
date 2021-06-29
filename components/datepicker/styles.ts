import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight, getLeft} from '../../styles/utils';
import '../../styles/global';

const {datepicker} = deepDefaults(theme, {
    datepicker: {
        width: `300px`,
        padding: `16px 16px 4px`,

        day: {
            margin: `7px`,
            get hoverBgColor() { return theme.color.bg },
            get exceedColor() { return theme.color.disabled },
            get todayBorder() { return `1px solid ${theme.color.border}` },
            get borderRadius() { return theme.borderRadius },

            active: {
                get bgColor() { return theme.color.primary },
                color: `#fff`,
                todayBorderColor: `transparent` ,
            },

            disabled: {
                color: '#ccc',
                hoverBgColor: 'none',
            }
        },

        weekday: {
            border: `1px solid #e5e5e5`,
            padding: `10px 0`
        },

        month: {
            padding: `0 6px 12px`,
            fontSize: `14px`,
            valueGap: `3px`,
        },
    }
});

// export function makePanelStyles() {
    // return css`
        // padding: ${datepicker.padding};
    // `
// }

export function makeCalendarStyles() {
    return css`
        padding: ${datepicker.padding};
        width: ${datepicker.width};
        position: relative;
        .k-datepicker-month {
            display: flex;
            padding: ${datepicker.month.padding};
        }
        .k-month-values {
            flex: 1;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            overflow: hidden;
            position: relative;
        }
        .k-month-value {
            margin: 0 ${datepicker.month.valueGap};
            line-height: ${theme.small.height};
        },
        .k-weekdays {
            display: flex;
            border-bottom: ${datepicker.weekday.border};
            padding: ${datepicker.weekday.padding};
        }
        .k-weekday {
            flex: 1;
            text-align: center;
        }
        .k-calendar-item {
            text-align: center;
            margin: ${datepicker.day.margin};
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            cursor: pointer;
            position: relative;
            border-radius: ${datepicker.day.borderRadius};
            &:hover {
                background: ${datepicker.day.hoverBgColor};
            }
            &.k-exceed {
                color: ${datepicker.day.exceedColor};
            }
            &.k-today {
                border: ${datepicker.day.todayBorder};
            }
            &.k-active {
                background: ${datepicker.day.active.bgColor};
                color: ${datepicker.day.active.color};
                &.k-today {
                    border-color: ${datepicker.day.active.todayBorderColor};
                }
            }
            &.k-disabled {
                color: ${datepicker.day.disabled.color};
                cursor: not-allowed;
                background: ${datepicker.day.disabled.hoverBgColor};
            }
            .k-value {
                flex: 1;
            }
        }
        .k-days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
        }
        .k-years {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    `
}
