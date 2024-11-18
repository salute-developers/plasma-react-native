import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LockOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9307 10.0684C12.9307 7.26922 15.1999 5 17.9991 5C20.7983 5 23.0676 7.26922 23.0676 10.0684V14.8899H12.9307V10.0684ZM25.0676 10.0684V14.8947C25.5974 14.905 26.0248 14.9369 26.4108 15.0344C28.1041 15.4618 29.4263 16.784 29.8537 18.4773C29.9988 19.052 29.9986 19.7183 29.9982 20.6781L29.9982 26.0413C29.9982 27.0553 29.9982 27.877 29.9438 28.5432C29.8876 29.2303 29.7686 29.8397 29.4805 30.4052C29.0251 31.299 28.2984 32.0256 27.4046 32.481C26.8391 32.7692 26.2298 32.8882 25.5426 32.9443C24.8764 32.9988 24.0547 32.9988 23.0407 32.9988H12.9575C11.9435 32.9988 11.1218 32.9988 10.4556 32.9443C9.76848 32.8882 9.15916 32.7692 8.59361 32.481C7.69984 32.0256 6.97318 31.299 6.51778 30.4052C6.22962 29.8397 6.11062 29.2303 6.05448 28.5432C6.00005 27.877 6.00005 27.0553 6.00006 26.0412L6.00003 20.6781C5.9997 19.7183 5.99946 19.052 6.14454 18.4773C6.57198 16.784 7.89416 15.4618 9.58748 15.0344C9.97348 14.9369 10.4008 14.905 10.9307 14.8947V10.0684C10.9307 6.16465 14.0953 3 17.9991 3C21.9029 3 25.0676 6.16465 25.0676 10.0684ZM10.077 16.9735C10.378 16.8975 10.7722 16.8899 11.9307 16.8899H24.0676C25.226 16.8899 25.6203 16.8975 25.9213 16.9735C26.9016 17.221 27.6671 17.9865 27.9145 18.9668C27.9905 19.2678 27.9982 19.6621 27.9982 20.8205V25.9987C27.9982 27.0653 27.9974 27.8052 27.9504 28.3803C27.9044 28.9438 27.819 29.2606 27.6985 29.4972C27.4348 30.0147 27.0141 30.4354 26.4967 30.699C26.26 30.8196 25.9432 30.9049 25.3797 30.951C24.8046 30.998 24.0648 30.9988 22.9982 30.9988H13.0001C11.9335 30.9988 11.1937 30.998 10.6185 30.951C10.055 30.9049 9.73821 30.8196 9.50159 30.699C8.98414 30.4354 8.56345 30.0147 8.2998 29.4972C8.17923 29.2606 8.09387 28.9438 8.04783 28.3803C8.00084 27.8052 8.00006 27.0653 8.00006 25.9988V20.8205C8.00006 19.6621 8.00773 19.2678 8.08371 18.9668C8.33118 17.9865 9.09665 17.221 10.077 16.9735ZM17.9993 27.0127C19.675 27.0127 21.0335 25.6389 21.0335 23.9443C21.0335 22.2497 19.675 20.876 17.9993 20.876C16.3235 20.876 14.9651 22.2497 14.9651 23.9443C14.9651 25.6389 16.3235 27.0127 17.9993 27.0127Z"
            fill="currentColor"
        />
    </s.Svg>
);
