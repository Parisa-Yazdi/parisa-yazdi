import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function useEmailForm(onSuccess: () => void) {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    onSuccess();

    emailjs.sendForm('service_lo16o7g', 'template_csne51f', form.current, 'xdYhLyKSyOlt5IZgr').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    // return jsx that says your message has been sent:

    e.target.reset();
  };

  return { form, sendEmail };
}
