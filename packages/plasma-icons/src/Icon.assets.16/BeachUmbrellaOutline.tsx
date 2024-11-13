import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BeachUmbrellaOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.90086 0.811259C10.1676 0.88273 10.3259 1.1569 10.2544 1.42362L10.1315 1.88223C11.7257 2.43374 13.0741 3.54399 13.9221 5.01683C14.6395 6.26276 14.9535 7.68953 14.8392 9.10397L14.8378 9.12058C14.8247 9.2832 14.8129 9.42942 14.7967 9.53997C14.7883 9.59728 14.7759 9.66677 14.7539 9.73468C14.7352 9.79267 14.6895 9.91587 14.5748 10.0167C14.3954 10.1744 14.1545 10.2252 13.9267 10.1536C13.7702 10.1044 13.675 9.9974 13.6398 9.95632C13.5934 9.90211 13.5532 9.84143 13.5205 9.78847C13.4563 9.68493 13.3787 9.5417 13.2891 9.37661L13.2815 9.36263C13.0351 8.90828 12.6966 8.53267 12.2503 8.41309C11.7476 8.27837 11.3689 8.3735 11.0824 8.53287L11.0774 8.53564C10.8459 8.66443 10.6664 8.76432 10.5397 8.83206C10.4766 8.86584 10.4196 8.8954 10.3727 8.91756C10.3498 8.92842 10.3219 8.94101 10.2928 8.95201L10.291 8.9527C10.2749 8.9589 10.2028 8.98658 10.1141 8.99066L10.1004 8.99141C10.0972 8.99161 10.086 8.99232 10.0755 8.99275L10.0745 8.99279C10.0547 8.99361 9.98702 8.9964 9.90665 8.97486C9.82628 8.95333 9.76905 8.91707 9.75234 8.90647L9.75143 8.9059C9.7435 8.90088 9.73518 8.89537 9.7316 8.89299L9.73057 8.89231L9.71908 8.88481C9.64433 8.83694 9.59573 8.77692 9.58486 8.76349L9.58364 8.76198C9.56398 8.73793 9.54612 8.71308 9.53165 8.69219C9.50212 8.64955 9.46757 8.59547 9.42978 8.53465C9.35399 8.41267 9.24842 8.23637 9.1123 8.00907L9.10938 8.00419C8.94096 7.72292 8.66061 7.45123 8.15785 7.31651C7.65508 7.18179 7.27644 7.27692 6.98995 7.43629L6.98498 7.43905C6.7535 7.56782 6.57386 7.66775 6.44725 7.73549C6.38411 7.76926 6.32714 7.79882 6.28025 7.82098C6.25728 7.83184 6.22938 7.84443 6.20034 7.85543L6.19853 7.85612C6.1824 7.86231 6.1103 7.89 6.02163 7.89408L6.00792 7.89483L6.00669 7.89491C6.00241 7.89517 5.99244 7.89579 5.98306 7.89617L5.98199 7.89621C5.96221 7.89703 5.89453 7.89982 5.81416 7.87828C5.7338 7.85675 5.67657 7.82049 5.65985 7.80989L5.65895 7.80932C5.65102 7.8043 5.64269 7.79879 5.63911 7.79642L5.63808 7.79574L5.62659 7.78823C5.55184 7.74036 5.50324 7.68033 5.49237 7.66691L5.49115 7.66541C5.4715 7.64136 5.45363 7.6165 5.43917 7.59561C5.40964 7.55298 5.37508 7.4989 5.33729 7.43808C5.2615 7.3161 5.15595 7.13982 5.01984 6.91253L5.01689 6.90761C4.84847 6.62635 4.56813 6.35465 4.06536 6.21993C3.61908 6.10035 3.13811 6.25639 2.69754 6.52665L2.68399 6.53496C2.5239 6.63317 2.38501 6.71837 2.27771 6.77599C2.22283 6.80546 2.15772 6.83793 2.09042 6.86167C2.03942 6.87966 1.90351 6.92471 1.74331 6.88906C1.51019 6.83719 1.32707 6.67274 1.25053 6.44652C1.20156 6.30178 1.22362 6.17226 1.23639 6.11267C1.25134 6.04288 1.2753 5.97647 1.29669 5.92264C1.33795 5.81882 1.40083 5.68628 1.47076 5.53889L1.47791 5.52383C2.08611 4.24172 3.07145 3.16311 4.31567 2.44279C5.78646 1.5913 7.5093 1.304 9.16561 1.62342L9.28849 1.16481C9.35996 0.898077 9.63413 0.739788 9.90086 0.811259ZM8.31178 8.67287C8.38325 8.40614 8.22496 8.13197 7.95823 8.0605C7.6915 7.98903 7.41733 8.14732 7.34586 8.41405L5.78537 14.2379L1.9979 14.2401C1.72176 14.2403 1.49777 14.4643 1.4976 14.7404C1.49744 15.0165 1.72116 15.2403 1.99731 15.2401L12.2376 15.234C12.5137 15.2338 12.7377 15.0099 12.7379 14.7337C12.738 14.4576 12.5143 14.2339 12.2382 14.234L6.82081 14.2372L8.31178 8.67287ZM4.81671 3.3082C6.20293 2.50568 7.84957 2.28759 9.39443 2.70153C10.9393 3.11548 12.2563 4.12767 13.0555 5.51578C13.5682 6.40621 13.8409 7.40455 13.8609 8.415C13.5523 8.00193 13.1148 7.60946 12.5091 7.44718C11.7345 7.23961 11.09 7.38438 10.5963 7.65899C10.4357 7.74832 10.3049 7.82106 10.2004 7.8784C10.1386 7.7765 10.0617 7.64811 9.96732 7.49046C9.67711 7.00581 9.19133 6.55817 8.41666 6.3506C7.642 6.14303 6.99747 6.2878 6.50382 6.56241C6.34324 6.65174 6.21244 6.72449 6.10796 6.78183C6.04614 6.67992 5.96924 6.55153 5.87484 6.39388C5.58463 5.90923 5.09884 5.46159 4.32417 5.25402C3.71852 5.09173 3.14343 5.21288 2.66958 5.41628C3.19217 4.55123 3.92751 3.82299 4.81671 3.3082Z"
            fill="currentColor"
        />
    </s.Svg>
);