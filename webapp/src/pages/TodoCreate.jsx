import React, {useEffect, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {createTodo} from "../services/todoService.js";
import {getCategories} from "../services/categoryService.js";

const TodoCreate = () => {
    const navigate = useNavigate();
    const statusEnum = ["pending", "in_progress", "completed", "cancelled"];
    const priorityEnum = ["low", "medium", "high"];
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

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
        due_date: Yup.date()
            .typeError("Geçerli bir tarih girin")
            .min(
                new Date(new Date().setDate(new Date().getDate() + 1)),
                "Tarih bugünden sonra olmalı"
            )
            .required("Bitiş tarihi zorunludur"),
        category_ids: Yup.array()
            .min(1, "En az bir kategori seçin")
            .of(Yup.number().typeError("Geçerli bir kategori ID'si olmalı")),
    });

    const initialValues = {
        title: "",
        description: "",
        status: "",
        priority: "",
        due_date: "",
        category_ids: []
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        const res = await createTodo(values);
        setSubmitting(false);
        navigate("/");
    };

    const fetchCategories = async () => {
        const res = await getCategories();
        setCategories(res);
    };

    return (
        <div className="dashboard-container">
            <div className="d-flex mb-4">
                <button className="pagination-button" onClick={() => navigate('/')}>Geri Dön</button>
                <h1 className="section-title marginLeft">Todo Oluştur</h1>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="todo-form">
                        <div className="form-group">
                            <label>Başlık</label>
                            <Field name="title" type="text" />
                            <ErrorMessage name="title" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label>Açıklama</label>
                            <Field name="description" as="textarea" />
                            <ErrorMessage name="description" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label>Durum</label>
                            <Field name="status" as="select">
                                <option value="">Seçiniz</option>
                                {statusEnum.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="status" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label>Öncelik</label>
                            <Field name="priority" as="select">
                                <option value="">Seçiniz</option>
                                {priorityEnum.map((priority) => (
                                    <option key={priority} value={priority}>
                                        {priority}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="priority" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label>Bitiş Tarihi</label>
                            <Field name="due_date" type="date" />
                            <ErrorMessage name="due_date" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label>Kategoriler</label>
                            <Field name="category_ids" as="select" multiple className="multi-select">
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="category_ids" component="div" className="error" />
                        </div>

                        <button type="submit" className="submit-button" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                </>
                            ) : (
                                "Todo Oluştur"
                            )}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default TodoCreate;
