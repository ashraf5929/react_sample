import { Box, Typography, Grid, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import InputController from "../../components/inputs/input-controller";
import { useStyles } from "./styles";
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { submitNewRecord, updateRecord } from '../../services/apiService';
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


const ItemForm = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const { handleSubmit, control, setValue } = useForm();
    const location = useLocation();
    const [id, setId] = React.useState(null);

    const createMutation = useMutation(submitNewRecord, {
        onSuccess: () => {
            navigate('/list')
        }
    });
    const updateMutation = useMutation(updateRecord, {
        onSuccess: () => {
            navigate('/list')
        }
    });

    const onSubmit = (data) => {
        data.id = 0;
        createMutation.mutate(data);
    };

    const onEditSubmit = (data) => {
        data.responseDate = new Date();
        data.id = id;
        updateMutation.mutate(data);
    }

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const dataString = query.get("data");

        if (dataString) {
            try {
                const dataObject = JSON.parse(dataString);
                setId(dataObject.id);
                setValue("description", dataObject.description);
                setValue("resourceId", dataObject.resourceId);
                setValue("type", dataObject.type);
                setValue("status", dataObject.status);
                setValue("forType", dataObject.forType);
            } catch (error) {
                console.error("Error parsing data:", error);
            }
        }
    }, [location.search, setValue]);

    return (
        <>
            <Container>
                <h1 className={classes.formTitle}> Form</h1>
                <Box>
                    <form
                        className={classes.formContainer}
                        onSubmit={handleSubmit(id ? onEditSubmit : onSubmit)}
                    >
                        <InputController
                            control={control}
                            name="description"
                            label="description"
                            required={true}
                            type="String"
                            placeholder="Enter the Description"
                        />

                        <InputController
                            control={control}
                            name="resourceId"
                            label="Resource ID"
                            required={true}
                            type="String"
                            placeholder="Enter the Resource ID"
                        />

                        <InputController
                            control={control}
                            name="type"
                            label="Type"
                            required={true}
                            type="String"
                            placeholder="Enter the Type"
                        />

                        <InputController
                            control={control}
                            name="status"
                            label="Status"
                            required={true}
                            type="String"
                            placeholder="Enter the Status"
                        />

                        <InputController
                            control={control}
                            name="forType"
                            label="For Type"
                            required={true}
                            type="String"
                            placeholder="Enter the For Type"
                        />

                        <Box className={classes.submitButtonContainer}>
                            <button
                                className={classes.submitButton}
                                type="submit"
                            >
                                Submit
                            </button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </>
    );
}

export default ItemForm;
