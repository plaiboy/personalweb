'use client';

// Dependencies
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// Components
import { Button } from './Button';
import SuccessModal from './modals/SuccessModal';
import ErrorModal from './modals/ErrorModal';

// HOC
import { SectionWrapper } from '../hoc';

// Utilities
import { slideIn } from '../lib/motion';

// Types
type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  emailjsPublicKey: string | undefined;
  emailjsServiceID: string;
  emailjsTemplateID: string;
};

type ErrorMessage = {
  errorMessage: string | undefined;
};

// Error Message
function Error(error: ErrorMessage) {
  return (
    <p
      role="alert"
      className="italic text-red-600"
    >{`⚠ ${error.errorMessage}`}</p>
  );
}

function ContactForm() {
  // React hook form state
  const {
    register,
    reset,
    formState,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormData>({
    mode: 'onChange',
    defaultValues: { firstName: '', lastName: '', email: '', message: '' },
  });
  // Modal state
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [emailjsErrorMessage, setEmailjsErrorMessage] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID === undefined ||
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID === undefined ||
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY === undefined
    ) {
      setEmailjsErrorMessage(
        'EmailJS credentials are incorrect please contact me using any of my socials or directly using my email address'
      );
      setErrorOpen(true);
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_name: `${data.firstName} ${data.lastName}`,
          to_name: 'Seth',
          user_email: data.email,
          to_email: 'Sethmbaka5@gmail.com',
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          if (response.status === 200) setSuccessOpen(true);
        },
        function (error) {
          if (error) {
            setEmailjsErrorMessage(error.text);
            setErrorOpen(true);
          }
        }
      );
  };

  // Reset form data

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ firstName: '', lastName: '', email: '', message: '' });
    }
  }, [formState, reset]);

  return (
    <>
      <SuccessModal successOpen={successOpen} setSuccessOpen={setSuccessOpen} />
      <ErrorModal
        errorOpen={errorOpen}
        setErrorOpen={setErrorOpen}
        errorMessage={emailjsErrorMessage}
      />
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="isolate flex-[0.75] rounded-3xl border border-sunglow bg-space-cadet bg-topography-sunglow py-12 px-6"
      >
        <div className="mx-auto max-w-xl rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]">
          <p className="mt-2 text-lg leading-8 text-zinc-800">Get in touch.</p>
          <h2 className="bg-gradient-to-r from-sunglow to-bright-pink bg-clip-text text-3xl font-bold tracking-tight text-gray-900 text-transparent sm:text-4xl">
            {`Say What's Up`}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px] sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aquamarine sm:text-sm sm:leading-6"
                  {...register('firstName', {
                    required: 'First name is required',
                    minLength: {
                      value: 1,
                      message: 'Name must be at least 1 character',
                    },
                  })}
                />
                {errors.firstName && (
                  <Error errorMessage={errors.firstName.message} />
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aquamarine sm:text-sm sm:leading-6"
                  {...register('lastName', {
                    required: 'Last name is required',
                    minLength: {
                      value: 1,
                      message: 'Name must be at least 1 character',
                    },
                  })}
                />
                {errors.lastName && (
                  <Error errorMessage={errors.lastName.message} />
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aquamarine sm:text-sm sm:leading-6"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <Error errorMessage={errors.email.message} />}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-aquamarine sm:text-sm sm:leading-6"
                  defaultValue={''}
                  {...register('message', {
                    required: 'A message is required',
                    minLength: {
                      value: 8,
                      message: 'Message must be at least 8 characters long',
                    },
                  })}
                />
                {errors.message && (
                  <Error errorMessage={errors.message.message} />
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
              variant="primary"
              className="group w-full"
              text="Let's Talk"
              type="submit"
            />
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default SectionWrapper(ContactForm, 'contact-form');