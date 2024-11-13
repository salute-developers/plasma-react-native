import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PauseOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8855 4.5C11.3694 4.49999 10.9305 4.49998 10.5689 4.52562C10.1898 4.5525 9.82027 4.61114 9.4597 4.76711C8.70072 5.09543 8.09542 5.70072 7.76711 6.4597C7.61114 6.82027 7.5525 7.18985 7.52562 7.5689C7.49998 7.93054 7.49999 8.36943 7.5 8.88555V27.1131C7.49999 27.6292 7.49998 28.0681 7.52562 28.4297C7.5525 28.8088 7.61114 29.1784 7.76711 29.5389C8.09542 30.2979 8.70072 30.9032 9.4597 31.2315C9.82027 31.3875 10.1898 31.4461 10.5689 31.473C10.9305 31.4986 11.3694 31.4986 11.8854 31.4986H11.9537C12.4697 31.4986 12.9087 31.4986 13.2703 31.473C13.6493 31.4461 14.0189 31.3875 14.3795 31.2315C15.1385 30.9032 15.7438 30.2979 16.0721 29.5389C16.228 29.1784 16.2867 28.8088 16.3136 28.4297C16.3392 28.0681 16.3392 27.6292 16.3392 27.1132V8.88555C16.3392 8.36948 16.3392 7.93052 16.3136 7.56889C16.2867 7.18985 16.228 6.82027 16.0721 6.4597C15.7438 5.70072 15.1385 5.09543 14.3795 4.76711C14.0189 4.61114 13.6493 4.5525 13.2703 4.52562C12.9086 4.49998 12.4698 4.49999 11.9536 4.5H11.8855ZM10.2537 6.60274C10.3207 6.57378 10.4374 6.53997 10.7104 6.52061C10.9928 6.50059 11.3602 6.5 11.9196 6.5C12.4789 6.5 12.8464 6.50059 13.1288 6.52061C13.4018 6.53997 13.5185 6.57378 13.5854 6.60274C13.8774 6.72901 14.1102 6.96181 14.2364 7.25373C14.2654 7.32067 14.2992 7.4374 14.3186 7.71035C14.3386 7.99278 14.3392 8.36023 14.3392 8.91959V27.079C14.3392 27.6384 14.3386 28.0058 14.3186 28.2883C14.2992 28.5612 14.2654 28.6779 14.2364 28.7449C14.1102 29.0368 13.8774 29.2696 13.5854 29.3959C13.5185 29.4248 13.4018 29.4587 13.1288 29.478C12.8464 29.498 12.4789 29.4986 11.9196 29.4986C11.3602 29.4986 10.9928 29.498 10.7104 29.478C10.4374 29.4587 10.3207 29.4248 10.2537 29.3959C9.96181 29.2696 9.72901 29.0368 9.60274 28.7449C9.57378 28.6779 9.53997 28.5612 9.52061 28.2883C9.50059 28.0058 9.5 27.6384 9.5 27.079V8.91959C9.5 8.36023 9.50059 7.99278 9.52061 7.71035C9.53997 7.4374 9.57378 7.32067 9.60274 7.25373C9.72901 6.96181 9.96181 6.72901 10.2537 6.60274ZM24.1125 31.499C24.6286 31.499 25.0675 31.4991 25.4292 31.4734C25.8082 31.4465 26.1778 31.3879 26.5383 31.2319C27.2973 30.9036 27.9026 30.2983 28.2309 29.5393C28.3869 29.1788 28.4456 28.8092 28.4724 28.4301C28.4981 28.0685 28.4981 27.6296 28.498 27.1135V8.88596C28.4981 8.36984 28.4981 7.93095 28.4724 7.5693C28.4456 7.19026 28.3869 6.82068 28.2309 6.46011C27.9026 5.70112 27.2973 5.09583 26.5383 4.76752C26.1778 4.61155 25.8082 4.55291 25.4292 4.52603C25.0675 4.50039 24.6286 4.5004 24.1125 4.50041H24.0444C23.5283 4.5004 23.0894 4.50039 22.7278 4.52603C22.3487 4.55291 21.9791 4.61155 21.6186 4.76752C20.8596 5.09583 20.2543 5.70112 19.926 6.46011C19.77 6.82068 19.7114 7.19026 19.6845 7.5693C19.6589 7.93093 19.6589 8.36978 19.6589 8.88586L19.6589 27.1135C19.6589 27.6296 19.6589 28.0685 19.6845 28.4301C19.7114 28.8092 19.77 29.1788 19.926 29.5393C20.2543 30.2983 20.8596 30.9036 21.6186 31.2319C21.9791 31.3879 22.3487 31.4465 22.7278 31.4734C23.0894 31.4991 23.5283 31.499 24.0444 31.499H24.1125ZM25.7443 29.3963C25.6774 29.4252 25.5606 29.4591 25.2877 29.4784C25.0053 29.4984 24.6378 29.499 24.0785 29.499C23.5191 29.499 23.1517 29.4984 22.8692 29.4784C22.5963 29.4591 22.4795 29.4252 22.4126 29.3963C22.1207 29.27 21.8879 29.0372 21.7616 28.7453C21.7327 28.6784 21.6988 28.5616 21.6795 28.2887C21.6595 28.0062 21.6589 27.6388 21.6589 27.0794V8.92C21.6589 8.36064 21.6595 7.99319 21.6795 7.71076C21.6988 7.43781 21.7327 7.32108 21.7616 7.25414C21.8879 6.96222 22.1207 6.72942 22.4126 6.60315C22.4795 6.57419 22.5963 6.54038 22.8692 6.52102C23.1517 6.501 23.5191 6.50041 24.0785 6.50041C24.6378 6.50041 25.0053 6.501 25.2877 6.52102C25.5606 6.54038 25.6774 6.57419 25.7443 6.60315C26.0362 6.72942 26.269 6.96222 26.3953 7.25414C26.4243 7.32108 26.4581 7.43781 26.4774 7.71076C26.4975 7.99319 26.498 8.36064 26.498 8.92V27.0794C26.498 27.6388 26.4975 28.0062 26.4774 28.2887C26.4581 28.5616 26.4243 28.6784 26.3953 28.7453C26.269 29.0372 26.0362 29.27 25.7443 29.3963Z"
            fill="currentColor"
        />
    </s.Svg>
);