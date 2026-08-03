import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;

export interface FormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Shared contact form hook used by DesktopGetInTouch, TabletGetInTouch,
 * and MobileGetInTouch to avoid duplicating emailjs logic.
 */
export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    setError(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setSubmitted(true);
        setIsLoading(false);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
      },
      () => {
        setError('Failed to send your message. Please try again shortly.');
        setIsLoading(false);
      },
    );
  };

  return { formData, submitted, isLoading, error, form, handleChange, handleSubmit };
}
