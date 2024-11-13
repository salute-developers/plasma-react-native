import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ParkingOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4575 4.5C10.4435 4.49999 9.62178 4.49998 8.95558 4.55441C8.26841 4.61056 7.6591 4.72956 7.09355 5.01772C6.19978 5.47312 5.47312 6.19978 5.01772 7.09355C4.72956 7.6591 4.61056 8.26842 4.55441 8.95558C4.49998 9.62178 4.49999 10.4435 4.5 11.4575V24.5411C4.49999 25.5551 4.49998 26.3768 4.55441 27.043C4.61056 27.7302 4.72956 28.3395 5.01772 28.9051C5.47312 29.7988 6.19978 30.5255 7.09355 30.9809C7.6591 31.2691 8.26842 31.3881 8.95558 31.4442C9.62178 31.4986 10.4435 31.4986 11.4575 31.4986H24.5411C25.5552 31.4986 26.3768 31.4986 27.043 31.4442C27.7302 31.3881 28.3395 31.2691 28.9051 30.9809C29.7988 30.5255 30.5255 29.7988 30.9809 28.9051C31.2691 28.3395 31.3881 27.7302 31.4442 27.043C31.4986 26.3768 31.4986 25.5552 31.4986 24.5411V11.4575C31.4986 10.4435 31.4986 9.62178 31.4442 8.95558C31.3881 8.26841 31.2691 7.6591 30.9809 7.09355C30.5255 6.19978 29.7988 5.47312 28.9051 5.01772C28.3395 4.72956 27.7302 4.61056 27.043 4.55441C26.3768 4.49998 25.5551 4.49999 24.5411 4.5H11.4575ZM8.00153 6.79973C8.23814 6.67917 8.55496 6.59381 9.11844 6.54777C9.69359 6.50078 10.4334 6.5 11.5 6.5H24.4986C25.5652 6.5 26.305 6.50078 26.8802 6.54777C27.4437 6.59381 27.7605 6.67917 27.9971 6.79973C28.5145 7.06338 28.9352 7.48408 29.1989 8.00153C29.3194 8.23814 29.4048 8.55496 29.4508 9.11844C29.4978 9.69359 29.4986 10.4334 29.4986 11.5V24.4986C29.4986 25.5652 29.4978 26.305 29.4508 26.8802C29.4048 27.4437 29.3194 27.7605 29.1989 27.9971C28.9352 28.5145 28.5145 28.9352 27.9971 29.1989C27.7605 29.3194 27.4437 29.4048 26.8802 29.4508C26.305 29.4978 25.5652 29.4986 24.4986 29.4986H11.5C10.4334 29.4986 9.6936 29.4978 9.11844 29.4508C8.55496 29.4048 8.23814 29.3194 8.00153 29.1989C7.48408 28.9352 7.06338 28.5145 6.79973 27.9971C6.67917 27.7605 6.59381 27.4437 6.54777 26.8802C6.50078 26.305 6.5 25.5652 6.5 24.4986V11.5C6.5 10.4334 6.50078 9.6936 6.54777 9.11844C6.59381 8.55496 6.67917 8.23814 6.79973 8.00153C7.06338 7.48408 7.48408 7.06338 8.00153 6.79973ZM13.833 11.3177C13.2807 11.3177 12.833 11.7654 12.833 12.3177V23.6807C12.833 24.233 13.2807 24.6807 13.833 24.6807C14.3853 24.6807 14.833 24.233 14.833 23.6807V20.1355H19.5145C21.9495 20.1355 23.9234 18.1616 23.9234 15.7266C23.9234 13.2916 21.9495 11.3177 19.5145 11.3177H13.833ZM19.5145 18.1355H14.833V13.3177H19.5145C20.8449 13.3177 21.9234 14.3962 21.9234 15.7266C21.9234 17.057 20.8449 18.1355 19.5145 18.1355Z"
            fill="currentColor"
        />
    </s.Svg>
);