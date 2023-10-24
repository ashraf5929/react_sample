import { Box, Typography, Grid, Container } from "@mui/material";
import React, { useState } from "react";
import InputController from "../../components/inputs/input-controller";
import { useStyles } from "./styles";
import { useForm } from 'react-hook-form';


const ItemForm = () => {
    const classes = useStyles();

    const { handleSubmit, control, getValues } = useForm();

    const onSubmit = (data) => {
        console.log(data); // This will contain the form data.
    };

    const [initialValues, setInitialValues] = useState({ })

    return (
        <>
            <Container>
                <h1 className={classes.formTitle}> Form</h1>
                <Box>
                    <form className={classes.formContainer}
                        onSubmit={handleSubmit(onSubmit)}>
                        <InputController
                            control={control}
                            name="username"
                            label="Username"
                            required={true}
                            placeholder="Enter your username"
                            extendOnChange={() => {}}
                        />
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
                            <button className={classes.submitButton} type="submit">Submit</button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </>

    )
}

export default ItemForm;