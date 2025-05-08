import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoCreate = () => {
    const statusEnum = ["pending", "in_progress", "completed", "cancelled"];
    const priorityEnum = ["low", "medium", "high"];

    const validationSchema = Yup.object({
        title: Yup.string()
            .required("Başlık zorunludur")
            .min(3, "En az 3 karakter olmalı")
            .max(100, "En fazla 100 karakter olabilir"),
        description: Yup.string().max(500, "Açıklama en fazla 500 karakter olabilir"),
        status: Yup.string()
            .oneOf(statusEnum, "Geçersiz durum")
            .required("Durum zorunludur"),
        priority: Yup.string()
            .oneOf(priorityEnum, "Geçersiz öncelik")
            .required("Öncelik zorunludur"),
        dueDate: Yup.date()
            .typeError("Geçerli bir tarih girin")
            .min(
                new Date(new Date().setDate(new Date().getDate() + 1)),
                "Tarih bugünden sonra olmalı"
            )
            .required("Bitiş tarihi zorunludur"),
    });

    const initialValues = {
        title: "",
        description: "",
        status: "",
        priority: "",
        dueDate: "",
    };

    const handleSubmit = (values) => {
        console.log("Yeni Todo:", values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label>Başlık</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" component="div" />
                </div>

                <div>
                    <label>Açıklama</label>
                    <Field name="description" as="textarea" />
                    <ErrorMessage name="description" component="div" />
                </div>

                <div>
                    <label>Durum</label>
                    <Field name="status" as="select">
                        <option value="">Seçiniz</option>
                        {statusEnum.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="status" component="div" />
                </div>

                <div>
                    <label>Öncelik</label>
                    <Field name="priority" as="select">
                        <option value="">Seçiniz</option>
                        {priorityEnum.map((priority) => (
                            <option key={priority} value={priority}>
                                {priority}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name="priority" component="div" />
                </div>

                <div>
                    <label>Bitiş Tarihi</label>
                    <Field name="dueDate" type="date" />
                    <ErrorMessage name="dueDate" component="div" />
                </div>

                <button type="submit">Todo Oluştur</button>
            </Form>
        </Formik>
    );
};

export default TodoCreate;
