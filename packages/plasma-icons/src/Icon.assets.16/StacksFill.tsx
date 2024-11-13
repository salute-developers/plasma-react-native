import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StacksFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.38148 2.91103C1 3.65972 1 4.63982 1 6.6V9.4C1 11.3602 1 12.3403 1.38148 13.089C1.71703 13.7475 2.25247 14.283 2.91103 14.6185C3.21795 14.7749 3.56374 14.8672 4 14.9216V11.1973C4 10.0404 4 9.14147 4.05888 8.42073C4.11863 7.68945 4.24148 7.09769 4.51227 6.56625C4.96287 5.68188 5.68188 4.96287 6.56625 4.51227C7.09769 4.24148 7.68945 4.11863 8.42073 4.05888C9.14147 4 10.0404 4 11.1973 4H14.9216C14.8672 3.56374 14.7749 3.21795 14.6185 2.91103C14.283 2.25247 13.7475 1.71703 13.089 1.38148C12.3403 1 11.3602 1 9.4 1H6.6C4.63982 1 3.65972 1 2.91103 1.38148C2.25247 1.71703 1.71703 2.25247 1.38148 2.91103ZM14.9876 5H11.22C10.0356 5 9.17744 5.00039 8.50216 5.05556C7.83273 5.11026 7.38722 5.21629 7.02024 5.40328C6.32404 5.75801 5.75801 6.32404 5.40328 7.02024C5.21629 7.38722 5.11026 7.83273 5.05556 8.50216C5.00039 9.17744 5 10.0356 5 11.22V14.9876C5.44991 15 5.97516 15 6.6 15H7.5V11.3385C7.5 10.7687 7.49999 10.3106 7.53027 9.94001C7.56141 9.55891 7.62704 9.22647 7.78338 8.91962C8.03265 8.4304 8.4304 8.03265 8.91962 7.78338C9.22647 7.62704 9.55891 7.56141 9.94001 7.53027C10.3106 7.49999 10.7687 7.5 11.3385 7.5H15V6.6C15 5.97516 15 5.44991 14.9876 5ZM15 8.5H11.36C10.7637 8.5 10.3465 8.50039 10.0214 8.52695C9.70218 8.55303 9.51599 8.60185 9.37362 8.67439C9.07256 8.82779 8.82779 9.07256 8.67439 9.37362C8.60185 9.51599 8.55303 9.70218 8.52695 10.0214C8.50039 10.3465 8.5 10.7637 8.5 11.36V15H9.4C11.3602 15 12.3403 15 13.089 14.6185C13.7475 14.283 14.283 13.7475 14.6185 13.089C15 12.3403 15 11.3602 15 9.4V8.5Z"
            fill="currentColor"
        />
    </s.Svg>
);