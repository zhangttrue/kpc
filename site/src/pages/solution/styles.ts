import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';
import solution_bg from '../../imgs/solution_bg.png';

export function makeStyles() {

    return css`
        font-family: ${global.fontFamily};
        .solution-nav {
            ${mainBlock(260)};
            padding-top: 64px;
            background: #F1F6FA;
            background-image: url(${solution_bg});
            background-repeat: no-repeat;
            background-position: -30px 0px;
            .content {
                display: flex;
                align-items: center;
                .nav-title {
                    & > div:first-child {
                        font-size: 44px;
                        color: #000000;
                    }
                    & > div:last-child {
                        color: #797979;
                        font-size: 16px;
                    }
                }
            }
        }
        .solution-content {
            ${mainBlock(1030)};
            & > div {
                padding-top: 32px;
            }
            .solution-row {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }
            .solution-item {
                width: 384px;
                & > div:first-child {
                    width: 384px;
                    height: 240px;
                    background: #EFF3FA;
                    border-radius: 8px;
                }
                & > div:last-child {
                    display: flex;
                    align-items: center;
                    .title-box {
                        flex-grow: 1;
                        & > div:first-child {
                            margin-top: 15px;
                            font-size: 18px;
                            color: #000000;
                        }
                    }
                    .download-icon {
                        .k-icon {
                            font-size: 25px;
                        }
                    }
                }
            }
        }
    `
}
