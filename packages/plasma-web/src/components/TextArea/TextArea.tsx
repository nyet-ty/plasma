import React from 'react';
import styled from 'styled-components';
import { TextFieldHelper } from '@sberdevices/plasma-core/components/TextField';
import type { TextFieldProps as BaseTextFieldProps } from '@sberdevices/plasma-core/components/TextField';

import { TextFieldRoot, TextFieldInputWrapper, TextFieldInput, TextFieldContent } from '../TextField/TextField';

export interface TextAreaProps
    extends Omit<BaseTextFieldProps, 'type'>,
        Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur'> {
    /**
     * Изменение размера текстового поля.
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const StyledTextArea = styled.textarea<TextAreaProps>`
    height: 9.375rem; /* 150px */
    min-height: 3rem; /* 48px */
    ${({ resize }) => resize && `resize: ${resize};`}
`;

/**
 * Поле ввода многострочного текста.
 */
export const TextArea = React.forwardRef<HTMLInputElement, TextAreaProps>(
    (
        { value, placeholder, helperText, disabled, contentRight, status, resize, onChange, onFocus, onBlur, ...rest },
        ref,
    ) => {
        return (
            <TextFieldRoot disabled={disabled} status={status} isContentRight={!!contentRight} {...rest}>
                <TextFieldInputWrapper>
                    <TextFieldInput
                        as={StyledTextArea}
                        ref={ref}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled}
                        status={status}
                        isContentRight={!!contentRight}
                        resize={resize}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    {contentRight && <TextFieldContent>{contentRight}</TextFieldContent>}
                </TextFieldInputWrapper>
                {helperText && <TextFieldHelper status={status}>{helperText}</TextFieldHelper>}
            </TextFieldRoot>
        );
    },
);
