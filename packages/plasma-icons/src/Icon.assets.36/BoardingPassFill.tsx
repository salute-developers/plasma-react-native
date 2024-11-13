import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BoardingPassFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.5 8.25H8.4C6.50982 8.25 5.56473 8.25 4.84278 8.61785C4.20774 8.94143 3.69143 9.45774 3.36785 10.0928C3 10.8147 3 11.7598 3 13.65V22.35C3 24.2402 3 25.1853 3.36785 25.9072C3.69143 26.5423 4.20774 27.0586 4.84278 27.3821C5.56473 27.75 6.50982 27.75 8.4 27.75H25.5C25.5 26.7145 26.3395 25.875 27.375 25.875C28.4055 25.875 29.2418 26.7063 29.2499 27.7348C30.1164 27.7061 30.6846 27.623 31.1572 27.3821C31.7923 27.0586 32.3086 26.5423 32.6321 25.9072C33 25.1853 33 24.2402 33 22.35V13.65C33 11.7598 33 10.8147 32.6321 10.0928C32.3086 9.45774 31.7923 8.94143 31.1572 8.61785C30.6846 8.37704 30.1164 8.29388 29.2499 8.26515C29.2418 9.29371 28.4055 10.125 27.375 10.125C26.3395 10.125 25.5 9.28553 25.5 8.25ZM8.625 14.75C8.07272 14.75 7.625 15.1977 7.625 15.75C7.625 16.3023 8.07272 16.75 8.625 16.75H19.125C19.6773 16.75 20.125 16.3023 20.125 15.75C20.125 15.1977 19.6773 14.75 19.125 14.75H8.625ZM8.625 19.25C8.07272 19.25 7.625 19.6977 7.625 20.25C7.625 20.8023 8.07272 21.25 8.625 21.25H16.125C16.6773 21.25 17.125 20.8023 17.125 20.25C17.125 19.6977 16.6773 19.25 16.125 19.25H8.625ZM29.25 13.125C29.25 14.1605 28.4105 15 27.375 15C26.3395 15 25.5 14.1605 25.5 13.125C25.5 12.0895 26.3395 11.25 27.375 11.25C28.4105 11.25 29.25 12.0895 29.25 13.125ZM27.375 19.875C28.4105 19.875 29.25 19.0355 29.25 18C29.25 16.9645 28.4105 16.125 27.375 16.125C26.3395 16.125 25.5 16.9645 25.5 18C25.5 19.0355 26.3395 19.875 27.375 19.875ZM29.25 22.875C29.25 23.9105 28.4105 24.75 27.375 24.75C26.3395 24.75 25.5 23.9105 25.5 22.875C25.5 21.8395 26.3395 21 27.375 21C28.4105 21 29.25 21.8395 29.25 22.875Z"
            fill="currentColor"
        />
    </s.Svg>
);