'use client'
import { useState } from 'react';
import { Stepper, Button, Group, StepperStep, StepperCompleted, Paper, Box, Grid, GridCol, TextInput, NativeSelect, FileInput, Text, SimpleGrid, Space, RadioGroup, Radio, Flex, MultiSelect, Textarea } from '@mantine/core';
import styles from './completeRegistration.module.css'
import { IconChevronDown } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import DepartmentTable from './DepartmentTable';

export default function CompleteRegistration() {

    const form = useForm({
        initialValues: {
            companyName: '',
            email: '',
            phone: '',
            companySize: '',
            industry_field: '',
            country: '',
            website: '',
            domain: '',
            subDomain: '',
            companyLogo: '',
            employee_ID: '',
        },

        validate: {
            companyName: (value) => (value.trim() !== '' ? null : 'Company name is required'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
    })

    const [selectedOptions, setSelectedOptions] = useState([]); // To store selected options
    const [isRadioChecked, setIsRadioChecked] = useState(false);

    // Define the mapping of options to their codes
    const optionCodeMap = {
        'Company Initials': 'VT',
        'Department Code': '001',
        'Year of Employment': '2023',
        'Random Numbers': '5695',
    };

    const handleOptionSelect = (selected) => {
        setSelectedOptions([...selected]);
    };


    const [active, setActive] = useState(1);
    const nextStep = () => {
        // Validate the form fields
        const { values, errors } = form.validate();

        if (Object.keys(errors).length === 0) {
            // If there are no validation errors, proceed to the next step
            setActive((current) => (current < 3 ? current + 1 : current));
        } else {
            // If there are validation errors, display them
            form.forceValidate(); // This will display the validation errors
        }
    };
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    return (
        <div style={{height: '100vh', backgroundColor: '#F8F9FA'}}>
            <Stepper
                active={active}
                style={{     padding: '15px' }}
                onStepClick={setActive}
                classNames={{
                    stepBody: styles.stepBody,
                    stepIcon: styles.stepIcon,
                    steps: styles.steps
                }}
            >
                <StepperStep label="First step" description="Company Information">
                    <Paper shadow="xs" className={styles.container}>
                        <div
                            className={styles.containerContent}
                        >
                            <Text fz='1.5rem' fw={700}>Complete Company Information</Text>
                            <Box style={{ marginTop: '55px' }}>
                                <Grid pb={32} style={{ borderBottom: '2px solid hsl(0, 0%, 90%)' }} gutter='lg'>
                                    <GridCol span={{ base: 12, xs: 4 }} mb='lg'>
                                        <TextInput
                                            required
                                            size="md"
                                            label="Company Name"
                                            placeholder="Jitta Consultancy Ltd"
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <TextInput
                                            required
                                            size="md"
                                            label="Email"
                                            placeholder="jittoconsultancyltd@hr.com"
                                            style={{ width: "100%" }}
                                            {...form.getInputProps('companyName')}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <TextInput
                                            required
                                            size="md"
                                            label="Phone"
                                            placeholder="+234 000 000 0000"
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }} mb='lg'>
                                        <NativeSelect
                                            required
                                            rightSection={<IconChevronDown style={{ width: '25px', height: '25px', color: '#3377FF' }} />}
                                            size="md"
                                            label="Company Size"
                                            data={["1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001+"]}
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <NativeSelect
                                            required
                                            rightSection={<IconChevronDown style={{ width: '25px', height: '25px', color: '#3377FF' }} />}
                                            size="md"
                                            label="Industry/Field"
                                            data={["Consultancy", "Healthcare", "Information Technology", "Education", "Agriculture", "Renewable Energy"]}
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <NativeSelect
                                            required
                                            rightSection={<IconChevronDown style={{ width: '25px', height: '25px', color: '#3377FF' }} />}
                                            size="md"
                                            label="Country"
                                            data={["Nigeria"]}
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <TextInput
                                            required
                                            size="md"
                                            label="Website"
                                            placeholder="www.jittoocnsultancy.com"
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <TextInput
                                            required
                                            size="md"
                                            label="Domain"
                                            placeholder="www.jittoocnsultancy.com"
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <TextInput
                                            required
                                            size="md"
                                            label="Sub Domain"
                                            placeholder="@heasyresource.com"
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 4 }}>
                                        <FileInput
                                            size='md'
                                            // variant='filled'
                                            label="Company Logo"
                                            placeholder="Input placeholder"
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                </Grid>
                                <Space h={32} />
                                <SimpleGrid w='60%' spacing={0} cols={1}>
                                    <div>
                                        <Text fz={20} fw={500} c='#272727'>Employee Configuration</Text>
                                        <Space h='12px' />
                                        <Text fz={15} fw={400} c='#5F5F5F'>Would you like us to automatically
                                            generate an employee ID?</Text>
                                    </div>
                                    <div>
                                        <Flex
                                            //  
                                            h='100%'
                                            align='flex-end'
                                        >
                                            <RadioGroup
                                                withAsterisk
                                            >
                                                <Group mt="xs" gap='md'>
                                                    <Radio
                                                        classNames={{ radio: styles.radio }}
                                                        labelPosition="left"
                                                        value="yes"
                                                        label="Yes"
                                                        onClick={() => setIsRadioChecked(true)}
                                                    />
                                                    <Radio
                                                        classNames={{ radio: styles.radio }}
                                                        labelPosition="left"
                                                        value="no"
                                                        label="No"
                                                        onClick={() => setIsRadioChecked(false)}
                                                    />
                                                </Group>
                                            </RadioGroup>
                                        </Flex>
                                    </div>
                                </SimpleGrid>
                                {isRadioChecked && (
                                    <>
                                        <Space h={32} />
                                        <div>
                                            {selectedOptions.map((option) => (
                                                <span>
                                                    {optionCodeMap[option]}
                                                </span>
                                            ))}
                                        </div>
                                        <MultiSelect
                                            maxDropdownHeight={150}
                                            w='30%'
                                            placeholder="Pick value"
                                            data={['Company Initials', 'Department Code', 'Year of Employment', 'Random Numbers']}
                                            onChange={(selected) => { handleOptionSelect(selected) }}
                                            clearable
                                            classNames={{
                                                pill: styles.pill
                                            }}
                                        />
                                    </>
                                )}
                                <Group justify="flex-end" py='xl' mt={{ base: '16px', xs: '64px' }} fz='16px'>
                                    <Button size='md' className={styles.control} variant="default" onClick={prevStep}>Back</Button>
                                    <Button size='md' className={styles.control} onClick={nextStep}>Continue</Button>
                                </Group>
                            </Box>
                        </div>
                    </Paper>
                </StepperStep>
                <StepperStep label="Second step" description="Verify email">
                    <Paper shadow="xs" className={styles.container}>
                        <div
                            className={styles.containerContent}
                        >
                            <Text fz='1.5rem' fw={700}>Complete Company Information</Text>
                            <Space h={64} />
                            <div>
                                <Text fz='20px' c='#272727'>Add Department</Text>
                                <Space h={15} />
                                <Text fz='13px'>Streamline your organization by creating a new department and defining its key attributes</Text>
                            </div>
                            <Box style={{ marginTop: '55px' }}>
                                <DepartmentTable />
                                <Group justify="flex-end" py='xl' mt={{ base: '16px', xs: '64px' }} fz='16px'>
                                    <Button size='md' className={styles.control} variant="default" onClick={prevStep}>Back</Button>
                                    <Button size='md' className={styles.control} onClick={nextStep}>Continue</Button>
                                </Group>
                            </Box>
                        </div>
                    </Paper>
                </StepperStep>
                <StepperCompleted>
                    Completed, click back button to get to previous step
                </StepperCompleted>
            </Stepper>
        </div>
    );
}