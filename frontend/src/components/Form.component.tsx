import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import * as React from "react";
import {ErrorMessage, FormikErrors, FormikTouched, FormikValues} from "formik";

interface FormData {
    email: string;
    password: string;
    name : string
}

interface FormComponentProps extends React.FormHTMLAttributes<HTMLFormElement> {
    error: string | FormikErrors<FormData> | undefined;
    touched: string | FormikTouched<FormData> | undefined;
    handleChange: (event : React.ChangeEvent<HTMLInputElement> ) => void;
    handleBlur: (event : React.FocusEvent<HTMLInputElement>) => void;
    values: FormikValues,
    id: "email" | "name" | "password";
    name: "email" | "name" | "password" ;
    type: "email" | "text" | "password";
    placeholder: string,
    lableName: string
}

const FormComponent = ({handleChange,handleBlur,values,id ,
                           name,
                           type ,placeholder,lableName} : FormComponentProps) => {
    return (
        <div className={"flex flex-col gap-0.5"}>
            <Label className={"mb-1.5"} htmlFor={name}>{lableName}</Label>
            <Input
                id={id}
                name={name}
                type={type}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
            />
            <ErrorMessage
                className="text-red-600 text-xs mt-1"
                component="p"
                id={`${name}-error`}
                name={name}
            />
        </div>
    )
}
export default FormComponent
