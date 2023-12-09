import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../../UI/form/TextInput';
import FormInputError from '../../UI/form/FormInputError';
import TextAreaInput from '../../UI/form/TextAreaInput';

const UpdateDraftForm = ({ selectedDraft, onSubmit }) => {
    const { register, handleSubmit, formState, setValue, reset } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
  
    useEffect(() => {
      if (selectedDraft) {
        // Log the fetched draft data before updating the form fields
        console.log('Fetched Draft Data:', selectedDraft);
  
        // Update form fields with fetched data
        Object.keys(selectedDraft).forEach((field) => {
          setValue(field, selectedDraft[field]);
        });
      }
    }, [selectedDraft, setValue]);
  
    const submitHandler = async (formData) => {
      try {
        if (!selectedDraft) {
          // Handle the case where selectedDraft is null
          console.log('Selected Draft is null.');
          return;
        }
  
        const response = await fetch(`http://localhost:3001/drafts/updateDraft/${selectedDraft._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw Error(data.error);
        }
  
        console.log(data);
  
        reset();
  
        setSuccessMessage('Draft updated successfully');
  
        if (onSubmit) {
          onSubmit(data.updatedDraft);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

  return (
    <form
      className="justify-center flex flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextAreaInput
        label="Description"
        name="description"
        register={register}
        validation={{ required: true }}
        disabled // Make the description field disabled as it's used for fetching
      />
      {formState.errors.description && (
        <FormInputError>Description must not be empty</FormInputError>
      )}

      <TextInput
        label="Publish Date"
        type="text"
        name="publishdate"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.publishdate && (
        <FormInputError>Publish date must not be empty</FormInputError>
      )}

      <TextInput
        label="Keyword"
        type="text"
        name="keyword"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.keyword && (
        <FormInputError>Keyword must not be empty</FormInputError>
      )}

      <TextInput
        label="Image URL"
        type="text"
        name="imgurl" 
        register={register}
        validation={{ required: true }}
      />
      
      {successMessage && (
        <div className="text-green-500">{successMessage}</div>
      )}

      <button
        type="submit"
        className="bg-white rounded-x1 my-4 py-2 px-8 self-center"
      >
        Update Draft
      </button>
    </form>
  );
};

export default UpdateDraftForm;