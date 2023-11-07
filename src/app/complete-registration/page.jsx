'use client'
import { useState } from 'react';
import { Stepper, Button, Group, StepperStep, StepperCompleted, Paper, Box, Grid, GridCol, TextInput, NativeSelect, FileInput, Text, SimpleGrid, Space, RadioGroup, Radio, Flex, MultiSelect, Textarea } from '@mantine/core';
import styles from './completeRegistration.module.css'
import { IconChevronDown, IconPhoto } from '@tabler/icons-react';
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

        validate: (value) => {
            if (active === 0) {
                return {
                    companyName: value.companyName.trim() !== '' ? null : 'Company name is required',
                    email: /^\S+@\S+$/.test(value.email) ? null : 'Invalid email',
                    phone: /^\+\d{1,3} \d{10}$/.test(value.phone) ? null : 'Invalid phone number',
                    companySize: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001+"].includes(value.companySize) ? null : 'Invalid company size',
                    industry_field: ["Consultancy", "Healthcare", "Information Technology", "Education", "Agriculture", "Renewable Energy"].includes(value.industry_field) ? null : 'Invalid industry/field',
                    country: value.country === "Nigeria" ? null : 'Invalid country', // You can add more countries to the array if needed
                    website: /^(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value.website) ? null : 'Invalid website',
                    emailDomain: /^@[a-zA-Z0-9][a-zA-Z0-9\.-]+[a-zA-Z0-9]\.[a-zA-Z]{2,}(,@[a-zA-Z0-9][a-zA-Z0-9\.-]+[a-zA-Z0-9]\.[a-zA-Z]{2,})*$/.test(value.domain) ? null : 'Enter valid email domains in the format @domain.com, separated by commas',
                    subDomain: value.subDomain.match(/^@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ? null : 'Invalid subdomain',
                    companyLogo: value.companyLogo ? null : 'Company logo is required',
                    employee_id_options: selectedOptions.length >= 4 ? null : 'Select all options for Employee ID',
                }
            }
        }
    })



    const [selectedOptions, setSelectedOptions] = useState([]); // To store selected options
    const [isRadioChecked, setIsRadioChecked] = useState(false);
    const [validationError, setValidationError] = useState(null);
    const allOptions = ['Company Initials', 'Department Code', 'Year of Employment', 'Random Numbers'];


    const validateMultiSelect = (selectedOptions, allOptions) => {
        if (selectedOptions.length === 0) {
            return 'Please generate the employee ID'; // No option selected
        } else if (selectedOptions.length === allOptions.length) {
            return null; // Validation passed, all options are selected
        } else {
            return 'Please select all options'; // Not all options are selected
        }
    };

    const handleMultiSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        const error = validateMultiSelect(selectedOptions, allOptions);
        setValidationError(error);
    };

    // Define the mapping of options to their codes
    const optionCodeMap = {
        'Company Initials': 'VT',
        'Department Code': '001',
        'Year of Employment': '2023',
        'Random Numbers': '5695',
    };




    const [active, setActive] = useState(0);
    const nextStep = () => {
        const error = validateMultiSelect(selectedOptions, allOptions);
        setActive((current) => {
            if (form.validate().hasErrors || error) {
                setValidationError(error);
                return current;
            
             }
            return current < 3 ? current + 1 : current;
        })
    }


    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div style={{ height: '100vh', backgroundColor: '#F8F9FA' }}>
            <Stepper
                active={active}
                style={{ padding: '15px' }}
                onStepClick={setActive}
                bg='#F8F9FA'
                classNames={{
                    stepBody: styles.stepBody,
                    stepIcon: styles.stepIcon,
                    steps: styles.steps,
                    stepWrapper: styles.stepWrapper
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
                                            {...form.getInputProps('companyName')}
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
                                            {...form.getInputProps('email')}
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
                                            label="Phone"
                                            placeholder="+234 000 000 0000"
                                            {...form.getInputProps('phone')}
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
                                            {...form.getInputProps('companySize')}
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
                                            {...form.getInputProps('industry_field')}
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
                                            {...form.getInputProps('country')}
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
                                            {...form.getInputProps('website')}
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
                                            label="Email Domain"
                                            placeholder="@heasyresource.com"  
                                            {...form.getInputProps('emailDomain')}
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
                                            {...form.getInputProps('subDomain')}
                                            style={{ width: "100%" }}
                                            classNames={{ 
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                    </GridCol>
                                    <GridCol span={{ base: 12, xs: 'fit-content' }}>
                                        <FileInput
                                            size='md'
                                            variant='unstyled'
                                            {...form.getInputProps('companyLogo')}
                                            label={<Group align='center'>
                                                <Text>
                                                    Upload Company Logo
                                                </Text>
                                                <IconPhoto />
                                            </Group>}
                                            inputWrapperOrder={['label', 'error', 'input']}
                                            withErrorStyles={false}
                                            classNames={{
                                                label: styles.fileLabel,
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
                                        <Text fz={15} fw={400} c='#5F5F5F'>
                                            Would you like us to automatically
                                            generate an employee ID?
                                        </Text>
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
                                        <TextInput
                                            required
                                            size="md"
                                            variant='unstyled'
                                            label="Employee ID"
                                            value={selectedOptions.map((option) => optionCodeMap[option]).join('')}
                                            onChange={() => {
                                                form.setValues({
                                                    employee_ID: selectedOptions.map((option) => optionCodeMap[option]).join(''),
                                                })
                                            }}
                                            style={{ width: "100%" }}
                                            classNames={{
                                                label: styles.label,
                                                error: styles.error,
                                                placeholder: styles.placeholder,
                                            }}
                                        />
                                        {validationError && <div style={{ color: 'red' }}>{validationError}</div>}

                                        <MultiSelect
                                            maxDropdownHeight={150}
                                            w='30%'
                                            placeholder="Pick value"
                                            data={allOptions}
                                            onChange={handleMultiSelectChange}
                                            clearable
                                            classNames={{
                                                pill: styles.pill
                                            }}
                                        />
                                    </>
                                )}
                                <Group justify="flex-end" py='xl' mt={{ base: '16px', xs: '64px' }} fz='16px'>
                                    <Button size='md' className={styles.control} variant="default" onClick={prevStep}>Back</Button>
                                    <Button size='md' color='rgba(51, 119, 255, 1)' className={styles.control} onClick={nextStep}>Continue</Button>
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
                                    <Button size='md' color='rgba(51, 119, 255, 1)' className={styles.control} onClick={nextStep}>Continue</Button>
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